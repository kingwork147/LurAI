import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(req: NextRequest) {
  let supabaseResponse = NextResponse.next({ request: req })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return req.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request: req })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  // Refresh the session so it doesn't expire mid-visit
  const { data: { user } } = await supabase.auth.getUser()
  const { pathname } = req.nextUrl

  // Unauthenticated users can't access protected pages
  if ((pathname.startsWith('/dashboard') || pathname === '/pending') && !user) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  // Authenticated users don't need to see auth pages
  if ((pathname === '/signin' || pathname === '/signup') && user) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/dashboard/:path*', '/pending', '/signin', '/signup'],
}
