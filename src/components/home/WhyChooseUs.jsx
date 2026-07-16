import { motion } from 'framer-motion'
import { ShieldCheck, Landmark, Users, HeartHandshake } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const features = [
  {
    icon: ShieldCheck,
    title: 'RERA Approved',
    text: 'Every Nextone project is fully registered and compliant, so you buy with total confidence.',
  },
  {
    icon: Landmark,
    title: 'Prime Locations',
    text: 'We handpick locations with strong connectivity, infrastructure and long-term value growth.',
  },
  {
    icon: Users,
    title: '3,200+ Happy Families',
    text: 'A track record built on timely delivery, quality construction and word-of-mouth trust.',
  },
  {
    icon: HeartHandshake,
    title: 'After-Sales Support',
    text: 'Our relationship continues after handover with dedicated customer care and facility support.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Nextone Realty"
          title="Real Estate, Done Right"
          subtitle="From site selection to handover, we design every step around trust, transparency and quality."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-7 rounded-2xl border border-gold-100 hover:border-gold-300 hover:shadow-lg transition-all bg-white"
            >
              <span className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-5">
                <Icon size={24} className="text-gold-600" />
              </span>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-charcoal/55 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
