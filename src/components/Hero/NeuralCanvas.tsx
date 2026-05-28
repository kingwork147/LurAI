'use client'

import { useRef, useMemo, useEffect, MutableRefObject } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 90
const BOUNDS = 14
const CONNECTION_THRESHOLD = 4.2
const SPEED = 0.006

function NeuralNet({ mouse }: { mouse: MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null)
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  const { initPos, velocities, colors } = useMemo(() => {
    const initPos = new Float32Array(NODE_COUNT * 3)
    const velocities = new Float32Array(NODE_COUNT * 3)
    const colors = new Float32Array(NODE_COUNT * 3)

    for (let i = 0; i < NODE_COUNT; i++) {
      // Weighted toward center for denser core
      const r = Math.pow(Math.random(), 0.6) * BOUNDS * 0.75
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      initPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      initPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5
      initPos[i * 3 + 2] = r * Math.cos(phi) * 0.25

      velocities[i * 3] = (Math.random() - 0.5) * SPEED
      velocities[i * 3 + 1] = (Math.random() - 0.5) * SPEED
      velocities[i * 3 + 2] = (Math.random() - 0.5) * SPEED * 0.3

      // Blend: electric blue → purple
      const t = Math.random()
      colors[i * 3] = 0.0 + t * 0.55      // R: 0 → 0.55
      colors[i * 3 + 1] = 0.83 * (1 - t * 0.6)  // G: 0.83 → 0.33
      colors[i * 3 + 2] = 1.0             // B: always 1
    }
    return { initPos, velocities, colors }
  }, [])

  const posRef = useRef(initPos.slice())

  // Pre-allocate line buffers (worst case: all pairs connected)
  const maxLines = NODE_COUNT * (NODE_COUNT - 1)
  const linePositionsBuf = useRef(new Float32Array(maxLines * 6))
  const lineColorsBuf = useRef(new Float32Array(maxLines * 6))

  useFrame((state) => {
    if (!pointsRef.current || !linesRef.current || !groupRef.current) return

    const pos = posRef.current
    const time = state.clock.elapsedTime

    // Update particle positions
    for (let i = 0; i < NODE_COUNT; i++) {
      const ix = i * 3, iy = i * 3 + 1, iz = i * 3 + 2
      pos[ix] += velocities[ix]
      pos[iy] += velocities[iy]
      pos[iz] += velocities[iz]

      const bx = BOUNDS * 0.72, by = BOUNDS * 0.4, bz = BOUNDS * 0.2
      if (Math.abs(pos[ix]) > bx) { velocities[ix] *= -0.98; pos[ix] = Math.sign(pos[ix]) * bx * 0.99 }
      if (Math.abs(pos[iy]) > by) { velocities[iy] *= -0.98; pos[iy] = Math.sign(pos[iy]) * by * 0.99 }
      if (Math.abs(pos[iz]) > bz) { velocities[iz] *= -0.98; pos[iz] = Math.sign(pos[iz]) * bz * 0.99 }
    }

    // Sync mesh positions
    const meshPos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length; i++) meshPos[i] = pos[i]
    pointsRef.current.geometry.attributes.position.needsUpdate = true

    // Rebuild connection lines
    let lineCount = 0
    const lp = linePositionsBuf.current
    const lc = lineColorsBuf.current

    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        const dist2 = dx * dx + dy * dy + dz * dz
        const thresh2 = CONNECTION_THRESHOLD * CONNECTION_THRESHOLD

        if (dist2 < thresh2) {
          const dist = Math.sqrt(dist2)
          const strength = (1 - dist / CONNECTION_THRESHOLD) * 0.5

          // Pulse along connection
          const pulse = Math.sin(time * 2 + i * 0.5 + j * 0.3) * 0.15 + 0.85

          const base = lineCount * 6
          lp[base] = pos[i * 3]; lp[base + 1] = pos[i * 3 + 1]; lp[base + 2] = pos[i * 3 + 2]
          lp[base + 3] = pos[j * 3]; lp[base + 4] = pos[j * 3 + 1]; lp[base + 5] = pos[j * 3 + 2]

          // Blue-purple gradient on lines
          const t = (i + j) / (NODE_COUNT * 2)
          lc[base] = t * 0.3 * strength * pulse
          lc[base + 1] = (0.83 - t * 0.5) * strength * pulse
          lc[base + 2] = strength * pulse
          lc[base + 3] = lc[base]; lc[base + 4] = lc[base + 1]; lc[base + 5] = lc[base + 2]

          lineCount++
        }
      }
    }

    const lineGeo = linesRef.current.geometry
    const lpSlice = lp.subarray(0, lineCount * 6)
    const lcSlice = lc.subarray(0, lineCount * 6)
    lineGeo.setAttribute('position', new THREE.BufferAttribute(lpSlice.slice(), 3))
    lineGeo.setAttribute('color', new THREE.BufferAttribute(lcSlice.slice(), 3))

    // Smooth mouse parallax
    const [mx, my] = mouse.current
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mx * 0.35, 0.04)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -my * 0.15, 0.04)

    // Gentle breathing
    groupRef.current.rotation.z = Math.sin(time * 0.08) * 0.04
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={initPos}
            count={NODE_COUNT}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            array={colors}
            count={NODE_COUNT}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.18}
          vertexColors
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

// Outer star field
function StarField() {
  const { positions } = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = -(Math.random() * 20 + 5)
    }
    return { positions }
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={200} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#8888aa"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function NeuralCanvas() {
  const mouse = useRef<[number, number]>([0, 0])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1,
      ]
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 16], fov: 58 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <NeuralNet mouse={mouse} />
        <StarField />
      </Canvas>
    </div>
  )
}
