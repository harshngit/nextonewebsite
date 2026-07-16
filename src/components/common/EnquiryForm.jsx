import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, User, Phone, Mail, Building2, MessageSquare } from 'lucide-react'
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
        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-gold-600" size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-charcoal mb-3">Thank you!</h3>
        <p className="text-charcoal/60 mb-8 max-w-xs">
          Your enquiry has been received. Our team will reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 bg-charcoal text-white rounded-lg hover:bg-ink transition-colors font-medium"
        >
          Submit another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <div>
      {title && (
        <div className={compact ? 'mb-6' : 'mb-8'}>
          <h3 className="text-2xl font-semibold text-charcoal">{title}</h3>
          {subtitle && <p className="text-sm text-charcoal/60 mt-2">{subtitle}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-charcoal/80">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                  errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
                }`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">{errors.name}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal/80">Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="98765 43210"
                value={form.phone}
                onChange={handleChange}
                className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                  errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-charcoal/80">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
              }`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="project" className="block text-sm font-medium text-charcoal/80">Interested Project (optional)</label>
          <div className="relative">
            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
            <select
              id="project"
              name="project"
              value={form.project}
              onChange={handleChange}
              className="w-full rounded-xl border border-charcoal/15 pl-11 pr-10 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 text-charcoal/80 bg-white appearance-none cursor-pointer"
            >
              <option value="">Select a project</option>
              {projects.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-charcoal/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {!compact && (
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-charcoal/80">Your Message</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-charcoal/30" size={18} />
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your requirements..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-xl border border-charcoal/15 pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 resize-none"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-white font-semibold px-6 py-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-gold-500/25"
        >
          Submit Enquiry
          <Send size={18} />
        </button>

        <p className="text-[12px] text-center text-charcoal/45">
          By submitting, you agree to be contacted by Nextone Realty regarding your enquiry.
        </p>
      </form>
    </div>
  )
}
