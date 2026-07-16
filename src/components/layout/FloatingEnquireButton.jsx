import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingEnquireButton() {
  const { pathname } = useLocation()
  const hasOwnEnquiryForm = pathname === '/contact' || pathname.startsWith('/projects/')

  if (hasOwnEnquiryForm) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <Link
        to="/contact"
        className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-5 py-3.5 rounded-full shadow-lg shadow-gold-500/30 transition-colors"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Enquire Now</span>
      </Link>
    </motion.div>
  )
}
