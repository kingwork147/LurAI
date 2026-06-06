import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Admin client — uses service role key, never exposed to browser
function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } },
  )
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const { email, password, fullName, company, phone } = body as Record<string, string>

  if (!email || !password || !fullName || !company) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }
  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  const supabase = adminClient()

  // Create auth user — skip email confirmation, we use admin approval instead
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (authError) {
    const msg = authError.message.toLowerCase().includes('already registered')
      ? 'An account with this email already exists.'
      : authError.message
    return NextResponse.json({ error: msg }, { status: 409 })
  }

  // Create profile row
  const { error: profileError } = await supabase.from('profiles').insert({
    id: authData.user.id,
    full_name: fullName,
    company,
    phone: phone || null,
    status: 'pending',
  })

  if (profileError) {
    // Roll back the auth user so the email can be reused
    await supabase.auth.admin.deleteUser(authData.user.id)
    console.error('Profile insert error:', profileError)
    return NextResponse.json({ error: 'Account setup failed. Please try again.' }, { status: 500 })
  }

  // Notify admin — requires RESEND_API_KEY env var (optional)
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Lur AI <noreply@lurai.in>',
          to: process.env.ADMIN_EMAIL ?? 'raj@lurai.in',
          subject: `New client signup: ${fullName} · ${company}`,
          html: `
            <div style="font-family:sans-serif;max-width:480px">
              <h2 style="color:#00C853">New Client Signup</h2>
              <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:6px 0;color:#666">Name</td><td style="padding:6px 0;font-weight:600">${fullName}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${company}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0">${email}</td></tr>
                <tr><td style="padding:6px 0;color:#666">Phone</td><td style="padding:6px 0">${phone || '—'}</td></tr>
              </table>
              <p style="margin-top:20px">
                Approve this client by going to your
                <a href="https://supabase.com/dashboard" style="color:#00C853">Supabase dashboard</a>
                → Table Editor → profiles → find their row → change <code>status</code> from
                <strong>pending</strong> to <strong>approved</strong>.
              </p>
            </div>
          `,
        }),
      })
    } catch {
      // Non-fatal — user is already created
    }
  }

  return NextResponse.json({ ok: true })
}
