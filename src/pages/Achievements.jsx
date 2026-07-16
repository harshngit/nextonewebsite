import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import SectionHeading from '../components/common/SectionHeading'
import AchievementsStrip from '../components/home/AchievementsStrip'
import Testimonials from '../components/home/Testimonials'
import CtaBand from '../components/home/CtaBand'
import { milestones, awards } from '../data/projects'

export default function Achievements() {
  return (
    <>
      <PageBanner
        eyebrow="Milestones"
        title="15+ Years of Achievements"
        crumb="Achievements"
        image="https://picsum.photos/seed/nextone-achievements-banner/1600/900"
      />

      <AchievementsStrip />

      <section className="py-20 sm:py-24">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Our Journey"
            title="Key Milestones"
            subtitle="A timeline of growth, trust and delivery since our founding in 2010."
          />

          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-gold-200 sm:-translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex sm:justify-between items-start sm:items-center gap-6 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-gold-500 border-4 border-white shadow flex items-center justify-center sm:-translate-x-1/2 z-10">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  <div className="pl-14 sm:pl-0 sm:w-[calc(50%-2rem)]">
                    <div className="bg-white rounded-2xl border border-gold-100 p-6 shadow-sm">
                      <span className="text-gold-600 font-semibold text-sm">{m.year}</span>
                      <h3 className="text-lg font-semibold text-charcoal mt-1 mb-2">{m.title}</h3>
                      <p className="text-sm text-charcoal/55 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gold-50/30">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards & Accolades"
            subtitle="Industry recognition for quality, compliance and customer trust."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gold-100 p-7 text-center hover:shadow-lg transition-shadow"
              >
                <span className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-5">
                  <Trophy size={22} className="text-gold-600" />
                </span>
                <h3 className="font-semibold text-charcoal mb-1">{award.title}</h3>
                <p className="text-xs text-gold-600 font-medium mb-2">{award.year}</p>
                <p className="text-sm text-charcoal/50">{award.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CtaBand />
    </>
  )
}
