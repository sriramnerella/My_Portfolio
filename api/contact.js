/* global process */
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const MAX_MESSAGE_LENGTH = 3000

const isValidEmail = (value) => {
  if (typeof value !== 'string') {
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value.trim())
}

const sanitize = (value) => {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().replace(/\s+/g, ' ')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      message: 'Method not allowed',
    })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({
      ok: false,
      message: 'Server email configuration is missing',
    })
  }

  const recipient = process.env.CONTACT_TO_EMAIL || 'sriramnerella435@gmail.com'
  const sender = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  const {
    name,
    email,
    subject,
    message,
    website,
  } = req.body || {}

  if (website) {
    return res.status(200).json({
      ok: true,
      message: 'Message received',
    })
  }

  const cleanName = sanitize(name)
  const cleanEmail = sanitize(email)
  const cleanSubject = sanitize(subject)
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
    return res.status(400).json({
      ok: false,
      message: 'Please fill in all fields',
    })
  }

  if (!isValidEmail(cleanEmail)) {
    return res.status(400).json({
      ok: false,
      message: 'Please enter a valid email address',
    })
  }

  if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      ok: false,
      message: 'Message is too long',
    })
  }

  try {
    const { data, error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: cleanEmail,
      subject: `[Portfolio Contact] ${cleanSubject}`,
      text: `You received a new message from your portfolio contact form.\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
    })

    if (error) {
      console.error('Resend send error:', error)
      return res.status(502).json({
        ok: false,
        message: 'Email provider rejected the message. Check sender/domain settings.',
      })
    }

    return res.status(200).json({
      ok: true,
      message: 'Message sent successfully',
      id: data?.id || null,
    })
  } catch {
    return res.status(500).json({
      ok: false,
      message: 'Unable to send message right now. Please try again.',
    })
  }
}
