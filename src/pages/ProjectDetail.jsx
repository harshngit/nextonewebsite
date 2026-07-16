import { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { MapPin, Home, CheckCircle2, Loader2 } from 'lucide-react'
import ProjectCard from '../components/common/ProjectCard'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProjectDetailEnquiryForm = ({ project }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
    budget: '',
    location_preference: '',
    configuration: project.configurations?.[0]?.configuration || '',
  }
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.phone.trim()) next.phone = 'Phone number is required'
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) next.phone = 'Enter a valid 10-digit number'
    return next
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`https://api.nextonerealty.in/api/v1/public/projects/${project.id}/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone.replace(/\D/g, ''),
          email: form.email,
          message: form.message || '',
          budget: form.budget || '',
          location_preference: form.location_preference || '',
          configuration: form.configuration || '',
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit enquiry')
      }

      setSubmitted(true)
      setForm({ ...initialState, configuration: project.configurations?.[0]?.configuration || '' })
    } catch (error) {
      console.error('Error submitting enquiry:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-12 px-6"
      >
        <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="text-gold-600" size={40} />
        </div>
        <h3 className="text-2xl font-semibold text-charcoal mb-3">Thank you!</h3>
        <p className="text-charcoal/60 mb-8 max-w-xs">
          Your enquiry has been received. Our team will reach out to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-6 py-2.5 bg-charcoal text-white rounded-lg hover:bg-ink transition-colors font-medium"
        >
          Submit another enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-charcoal">Enquire Now</h3>
        <p className="text-sm text-charcoal/60 mt-2">Interested in {project.name}? Share your details below.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="pd-name" className="block text-sm font-medium text-charcoal/80">Full Name</label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
            <input
              id="pd-name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
              className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
              } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="pd-phone" className="block text-sm font-medium text-charcoal/80">Phone Number</label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
            <input
              id="pd-phone"
              type="tel"
              name="phone"
              placeholder="98765 43210"
              value={form.phone}
              onChange={handleChange}
              disabled={loading}
              className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
              } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="pd-email" className="block text-sm font-medium text-charcoal/80">Email Address</label>
          <div className="relative">
            <Home className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/30" size={18} />
            <input
              id="pd-email"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
              className={`w-full rounded-xl border pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 ${
                errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/10' : 'border-charcoal/15'
              } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="pd-message" className="block text-sm font-medium text-charcoal/80">Your Message</label>
          <div className="relative">
            <Home className="absolute left-4 top-4 text-charcoal/30" size={18} />
            <textarea
              id="pd-message"
              name="message"
              placeholder="Tell us about your requirements..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              disabled={loading}
              className={`w-full rounded-xl border border-charcoal/15 pl-11 pr-4 py-3.5 text-sm outline-none transition-all focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 hover:border-charcoal/25 resize-none ${
                loading ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 disabled:bg-gold-400 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-xl transition-all"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Submitting...
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </form>
    </div>
  )
}

export default function ProjectDetail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState(null)
  const [relatedProjects, setRelatedProjects] = useState([])

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true)
      try {
        const response = await fetch(`https://api.nextonerealty.in/api/v1/public/projects/${id}`)
        const result = await response.json()
        if (result.success) {
          setProject(result.data)
        }
      } catch (error) {
        console.error('Error fetching project:', error)
      } finally {
        setLoading(false)
      }
    }

    const fetchRelatedProjects = async () => {
      try {
        const response = await fetch('https://api.nextonerealty.in/api/v1/public/projects')
        const result = await response.json()
        if (result.success) {
          setRelatedProjects(result.data.filter((p) => p.id !== id).slice(0, 3))
        }
      } catch (error) {
        console.error('Error fetching related projects:', error)
      }
    }

    if (id) {
      fetchProject()
      fetchRelatedProjects()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-gold-500" size={48} />
      </div>
    )
  }

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const galleryImages = [
    ...(project.photos?.map(p => p.file_path) || []),
    ...(project.videos?.map(v => v.file_path) || []),
  ]

  return (
    <>
      <section className="relative h-[46vh] min-h-[360px]">
        {galleryImages.length > 0 ? (
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="h-full nextone-hero-swiper"
          >
            {galleryImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-full object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src="https://picsum.photos/seed/nextone-project-detail/1600/900"
            alt={project.name}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent pointer-events-none" />
        <div className="container-xl absolute bottom-6 left-1/2 -translate-x-1/2 text-white flex items-center gap-1.5 text-sm z-10">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <span className="text-white/50">/</span>
          <Link to="/projects" className="hover:text-gold-300 transition-colors">Projects</Link>
          <span className="text-white/50">/</span>
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
                <span className="bg-gold-50 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {project.developer}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-charcoal">{project.name}</h1>
              <p className="flex items-center gap-1.5 text-charcoal/50 mt-3 text-sm">
                <MapPin size={16} className="text-gold-500" />
                {project.locality}, {project.city}
              </p>

              {project.description && (
                <div className="text-charcoal/65 leading-relaxed mt-6 whitespace-pre-wrap">
                  {project.description}
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {project.configurations?.length > 0 && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-50/50 border border-gold-100">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <Home size={18} className="text-gold-600" />
                    </span>
                    <div>
                      <p className="text-xs text-charcoal/45">Configuration</p>
                      <p className="text-sm font-semibold text-charcoal">
                        {project.configurations.map(c => c.configuration).join(', ')}
                      </p>
                    </div>
                  </div>
                )}

                {project.price_range && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-50/50 border border-gold-100">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <Home size={18} className="text-gold-600" />
                    </span>
                    <div>
                      <p className="text-xs text-charcoal/45">Price Range</p>
                      <p className="text-sm font-semibold text-charcoal">₹{project.price_range}</p>
                    </div>
                  </div>
                )}

                {project.total_units && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-50/50 border border-gold-100">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <Home size={18} className="text-gold-600" />
                    </span>
                    <div>
                      <p className="text-xs text-charcoal/45">Total Units</p>
                      <p className="text-sm font-semibold text-charcoal">{project.total_units}</p>
                    </div>
                  </div>
                )}

                {project.rera_number && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gold-50/50 border border-gold-100">
                    <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                      <Home size={18} className="text-gold-600" />
                    </span>
                    <div>
                      <p className="text-xs text-charcoal/45">RERA Number</p>
                      <p className="text-sm font-semibold text-charcoal">{project.rera_number}</p>
                    </div>
                  </div>
                )}
              </div>

              {project.amenities?.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-charcoal mb-5">Amenities</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-charcoal/70">
                        <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:sticky lg:top-28 h-fit bg-white rounded-2xl border border-gold-100 shadow-lg p-6 sm:p-7"
          >
            <ProjectDetailEnquiryForm project={project} />
          </motion.div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 bg-gold-50/30">
          <div className="container-xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-charcoal mb-10">
              Similar Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
