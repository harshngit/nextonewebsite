import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex items-center pt-32 pb-28 sm:pb-32 overflow-hidden">
      <img
        src="https://picsum.photos/seed/nextone-hero/1920/1080"
        alt="Nextone Realty properties"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />

      <div className="container-xl relative w-full">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold-300 mb-5"
        >
          15+ Years of Building Trust
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl"
        >
          Find a Home That
          <span className="text-gold-400"> Feels Like You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/70 text-base sm:text-lg max-w-xl mt-5"
        >
          Explore premium apartments, villas, plots and commercial spaces from Nextone
          Realty — trusted, RERA-approved developments across Maharashtra.
        </motion.p>
      </div>
    </section>
  )
}
