import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { MapPin, Home, Ruler, BadgeCheck, CheckCircle2, ChevronRight } from 'lucide-react'
import EnquiryForm from '../components/common/EnquiryForm'
import ProjectCard from '../components/common/ProjectCard'
import { getProjectBySlug, projects } from '../data/projects'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) return <Navigate to="/projects" replace />

  const related = projects.filter((p) => p.slug !== project.slug && p.type === project.type).slice(0, 3)

  const facts = [
    { icon: Home, label: 'Configuration', value: project.configuration },
    { icon: Ruler, label: 'Area', value: project.area },
    { icon: MapPin, label: 'Location', value: project.location },
    { icon: BadgeCheck, label: 'RERA ID', value: project.reraId },
  ]

  return (
    <>
      <section className="relative h-[46vh] min-h-[360px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="h-full nextone-hero-swiper"
        >
          {project.gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent pointer-events-none" />
        <div className="container-xl absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex items-center gap-1.5 text-sm z-10">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/projects" className="hover:text-gold-300 transition-colors">Projects</Link>
          <ChevronRight size={14} />
          <span className="text-gold-300">{project.name}</span>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-xl grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-gold-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {project.status}
                </span>
                <span className="bg-gold-50 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {project.type}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal">{project.name}</h1>
              <p className="flex items-center gap-1.5 text-charcoal/50 mt-3 text-sm">
                <MapPin size={16} className="text-gold-500" />
                {project.location}
              </p>

              <p className="text-charcoal/65 leading-relaxed mt-6">{project.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {facts.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-gold-50/50 border border-gold-100">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold-600" />
                    </span>
                    <div>
                      <p className="text-xs text-charcoal/45">{label}</p>
                      <p className="text-sm font-semibold text-charcoal">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-xl font-semibold text-charcoal mb-5">Amenities</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 text-sm text-charcoal/70">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl bg-charcoal text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">Starting Price</p>
                  <p className="text-2xl font-semibold text-gold-400 mt-1">{project.price}</p>
                </div>
                <a
                  href="#enquire"
                  className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
                >
                  Enquire About This Project
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            id="enquire"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 h-fit bg-white rounded-2xl border border-gold-100 shadow-lg p-6 sm:p-7"
          >
            <EnquiryForm
              title="Enquire Now"
              subtitle={`Interested in ${project.name}? Share your details below.`}
            />
          </motion.div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-20 bg-gold-50/30">
          <div className="container-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-charcoal mb-10">
              Similar Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
