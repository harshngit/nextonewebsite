import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, PhoneCall, Clock, ShieldCheck } from 'lucide-react'
import EnquiryForm from '../common/EnquiryForm'

const points = [
  { icon: PhoneCall, text: 'Speak to a property expert' },
  { icon: Clock, text: 'Callback within 24 hours' },
  { icon: ShieldCheck, text: '100% RERA-approved projects' },
]

export default function EnquiryModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-3xl grid lg:grid-cols-5 overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-charcoal flex items-center justify-center shadow"
            >
              <X size={18} />
            </button>

            <div className="lg:col-span-2 bg-charcoal text-white p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 mb-3">
                Quick Enquiry
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                Looking for Your Next Property?
              </h3>
              <p className="text-white/60 mt-3 text-sm">
                Tell us a little about what you're looking for and our team will get in touch
                with the best options for you.
              </p>
              <div className="mt-8 space-y-4">
                {points.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-gold-400" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 p-8 sm:p-10">
              <EnquiryForm compact title="" subtitle="" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
