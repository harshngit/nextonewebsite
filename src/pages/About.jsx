import { motion } from 'framer-motion'
import { Target, Eye, Award } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import SectionHeading from '../components/common/SectionHeading'
import AchievementsStrip from '../components/home/AchievementsStrip'
import CtaBand from '../components/home/CtaBand'

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To create thoughtfully designed, honestly built properties that families and businesses can trust for a lifetime.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be Maharashtra\'s most trusted real estate name, known for transparency, quality and timely delivery.',
  },
  {
    icon: Award,
    title: 'Our Promise',
    text: 'Every Nextone project is RERA-registered, quality-audited, and backed by dedicated after-sales support.',
  },
]

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Nextone Realty"
        title="Building Addresses, Not Just Buildings"
        crumb="About"
        image="https://picsum.photos/seed/nextone-about-banner/1600/900"
      />

      <section className="py-20 sm:py-24">
        <div className="container-xl grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://picsum.photos/seed/nextone-about-1/500/600"
              alt="Nextone Realty project"
              className="rounded-2xl w-full h-64 object-cover"
            />
            <img
              src="https://picsum.photos/seed/nextone-about-2/500/700"
              alt="Nextone Realty project"
              className="rounded-2xl w-full h-80 object-cover mt-8"
            />
            <img
              src="https://picsum.photos/seed/nextone-about-3/500/650"
              alt="Nextone Realty project"
              className="rounded-2xl w-full h-72 object-cover -mt-8"
            />
            <img
              src="https://picsum.photos/seed/nextone-about-4/500/550"
              alt="Nextone Realty project"
              className="rounded-2xl w-full h-56 object-cover"
            />
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Since 2010, Crafting Spaces People Love to Call Home"
              align="left"
            />
            <div className="space-y-4 mt-6 text-charcoal/65 text-sm sm:text-base leading-relaxed">
              <p>
                Nextone Realty began in Pune with a simple belief — that buying a property
                should be exciting, not stressful. What started as a single residential
                plotting project has grown into a name trusted across Pune, Mumbai, Nashik
                and Nagpur.
              </p>
              <p>
                Today, we've delivered 42+ projects spanning apartments, villas, plots and
                commercial spaces, serving over 3,200 families and businesses. Every project
                we take on is guided by the same principles we started with: honest
                communication, quality construction, and delivery you can set your calendar by.
              </p>
              <p>
                Our in-house team of architects, engineers and customer relationship
                managers works together from land acquisition to handover — and stays
                connected with you long after you receive your keys.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gold-50/30">
        <div className="container-xl">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission, Vision & Promise"
            subtitle="The principles behind every Nextone Realty development."
          />

          <div className="grid sm:grid-cols-3 gap-6 mt-14">
            {values.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gold-100 text-center"
              >
                <span className="w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-5">
                  <Icon size={22} className="text-white" />
                </span>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-sm text-charcoal/55 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AchievementsStrip />
      <CtaBand />
    </>
  )
}
