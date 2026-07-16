import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CtaBand() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/nextone-cta/1920/700"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/85" />
      <div className="container-xl relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-300">
            Start Your Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-4 max-w-2xl mx-auto">
            Your Dream Property Is Just a Conversation Away
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Book a free consultation with our property experts and explore options tailored
            to your budget and lifestyle.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3.5 rounded-lg mt-8 transition-colors"
          >
            Talk to an Expert
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
