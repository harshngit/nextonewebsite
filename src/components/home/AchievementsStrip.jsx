import { motion } from 'framer-motion'
import AnimatedCounter from '../common/AnimatedCounter'
import { achievements } from '../../data/projects'

export default function AchievementsStrip() {
  return (
    <section className="bg-charcoal py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_45%)]" />
      <div className="container-xl relative grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl sm:text-5xl font-heading font-semibold text-gold-400">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
            </p>
            <p className="text-white/60 text-sm mt-2 tracking-wide">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
