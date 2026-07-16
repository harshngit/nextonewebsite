import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageBanner({ eyebrow, title, crumb, image }) {
  return (
    <section className="relative h-[42vh] min-h-[320px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />

      <div className="container-xl relative pb-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-300 mb-2 block">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl font-semibold">{title}</h1>
          <div className="flex items-center gap-1.5 text-sm text-white/70 mt-4">
            <Link to="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-gold-300">{crumb}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
