import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight, Building, Image as ImageIcon } from 'lucide-react'

export default function ProjectCard({ project, index = 0 }) {
  const projectImage = project.photos?.[0]?.file_path || null
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gold-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <Link to={`/projects/${project.id}`}>
        <div className="relative h-56 overflow-hidden">
          {projectImage ? (
            <img
              src={projectImage}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gold-50/50">
              <ImageIcon size={48} className="text-gold-300" />
            </div>
          )}
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
            {project.city}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-sm mb-2">
            <Building size={14} className="text-gold-500 shrink-0" />
            <span>{project.developer}</span>
          </div>
          <h3 className="text-lg font-semibold text-charcoal mb-1 group-hover:text-gold-600 transition-colors">
            {project.name}
          </h3>
          
          <div className="flex items-center gap-1.5 text-charcoal/50 text-sm mb-4">
            <MapPin size={14} className="text-gold-500 shrink-0" />
            <span>{project.locality}, {project.city}</span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gold-100">
            <div className="flex items-baseline gap-2">
              <p className="text-[11px] uppercase tracking-wide text-charcoal/40">Starting at</p>
              <p className="text-gold-600 font-semibold">
                {project.price_range ? `₹${project.price_range}` : 'Contact for Price'}
              </p>
            </div>
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gold-50 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
