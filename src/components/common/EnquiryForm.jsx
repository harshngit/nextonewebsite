import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { projects } from '../../data/projects'

const initialState = { name: '', email: '', phone: '', project: '', message: '' }

export default function EnquiryForm({ compact = false, title = 'Get in Touch', subtitle = 'Share your details and our team will call you back within 24 hours.' }) {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) next.phone = 'Enter a valid 10-digit number'
    return next
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSubmitted(true)
    setForm(initialState)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 px-6"
      >
        <CheckCircle2 className="text-gold-500 mb-4" size={48} />
        <h3 className="text-xl font-semibold text-charcoal mb-2">Thank you!</h3>
        <p className="text-charcoal/60 mb-6">
          Your enquiry has been received. Our team will reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-gold-600 font-medium hover:underline"
        >
          Submit another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <div>
      {title && (
        <div className={compact ? 'mb-5' : 'mb-6'}>
          <h3 className="text-xl font-semibold text-charcoal">{title}</h3>
          {subtitle && <p className="text-sm text-charcoal/55 mt-1.5">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 ${
                errors.name ? 'border-red-400' : 'border-charcoal/15'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 ${
                errors.phone ? 'border-red-400' : 'border-charcoal/15'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-500 ${
              errors.email ? 'border-red-400' : 'border-charcoal/15'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <select
            name="project"
            value={form.project}
            onChange={handleChange}
            className="w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm outline-none focus:border-gold-500 text-charcoal/80 bg-white"
          >
            <option value="">Interested Project (optional)</option>
            {projects.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {!compact && (
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-charcoal/15 px-4 py-3 text-sm outline-none focus:border-gold-500 resize-none"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
        >
          Submit Enquiry
          <Send size={16} />
        </button>

        <p className="text-[11px] text-center text-charcoal/40">
          By submitting, you agree to be contacted by Nextone Realty regarding your enquiry.
        </p>
      </form>
    </div>
  )
}
