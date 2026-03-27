import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React, { useState } from 'react'
import WindowControls from '#components/WindowControls.jsx'

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
}

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setStatus({ type: 'idle', message: '' })
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const payload = await response.json().catch(() => null)

      if (!response.ok) {
        if (response.status === 404 && !payload) {
          throw new Error('Contact API is not running. Use Vercel deploy or run `npx vercel dev`.')
        }

        throw new Error(payload?.message || 'Something went wrong. Please try again.')
      }

      setStatus({
        type: 'success',
        message: payload?.message || 'Message sent successfully',
      })
      setForm(INITIAL_FORM)
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send your message right now.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className='p-5 space-y-5'>
        <img src="/images/Sriram.jpeg" alt="Sriram" className='w-32 h-32 rounded-full object-cover object-top border-4 border-purple-500 shadow-lg' />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I&apos;m in.</p>
        <p>sriramnerella435@gmail.com</p>

        <form className='contact-form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Your name'
            value={form.name}
            onChange={updateField}
            required
            autoComplete='name'
          />
          <input
            type='email'
            name='email'
            placeholder='Your email'
            value={form.email}
            onChange={updateField}
            required
            autoComplete='email'
          />
          <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={form.subject}
            onChange={updateField}
            required
          />
          <textarea
            name='message'
            placeholder='Your message'
            value={form.message}
            onChange={updateField}
            rows={5}
            required
          />
          <input
            type='text'
            name='website'
            value={form.website}
            onChange={updateField}
            tabIndex={-1}
            autoComplete='off'
            className='hidden-field'
            aria-hidden='true'
          />
          <button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status.type !== 'idle' && (
          <p className={status.type === 'success' ? 'status success' : 'status error'}>{status.message}</p>
        )}

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ background: bg }}>
              <a href={link} target="_blank" rel="noreferrer noopener" title={text}>
                <img src={icon} alt={text} className='size-5' />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow;