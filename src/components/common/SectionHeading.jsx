import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3 ${
            light ? 'text-gold-300' : 'text-gold-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-semibold leading-tight ${
          light ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/70' : 'text-charcoal/60'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
