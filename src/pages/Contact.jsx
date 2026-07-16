import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import EnquiryForm from '../components/common/EnquiryForm'

const cards = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Nextone Towers, Baner Road', 'Pune, Maharashtra 411045'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 91234 56789'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@nextonerealty.com', 'sales@nextonerealty.com'],
  },
  {
    icon: Clock,
    title: 'Office Hours',
    lines: ['Mon – Sat: 9:30 AM – 7:00 PM', 'Sunday: 10:00 AM – 4:00 PM'],
  },
]

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Nextone Realty"
        crumb="Contact Us"
        image="https://picsum.photos/seed/nextone-contact-banner/1600/900"
      />

      <section className="py-16 sm:py-20">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cards.map(({ icon: Icon, title, lines }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-gold-100 p-6 hover:shadow-lg transition-shadow"
              >
                <span className="w-12 h-12 rounded-xl bg-gold-50 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-gold-600" />
                </span>
                <h3 className="font-semibold text-charcoal mb-2">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-charcoal/55">
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 rounded-2xl overflow-hidden border border-gold-100 min-h-[420px]"
            >
              <iframe
                title="Nextone Realty Location"
                src="https://maps.google.com/maps?q=Pune%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: 420, border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 bg-white rounded-2xl border border-gold-100 shadow-sm p-6 sm:p-8"
            >
              <EnquiryForm
                title="Send Us an Enquiry"
                subtitle="Fill in your details and we'll get back to you within 24 hours."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
