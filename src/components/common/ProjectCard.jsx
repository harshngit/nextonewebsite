import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowUpRight } from 'lucide-react'

const statusStyles = {
  Ongoing: 'bg-gold-500 text-white',
  Upcoming: 'bg-charcoal text-white',
  Completed: 'bg-white text-charcoal border border-charcoal/20',
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gold-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <Link to={`/projects/${project.slug}`}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <span
            className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide ${statusStyles[project.status]}`}
          >
            {project.status}
          </span>
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-1.5 text-charcoal/50 text-sm mb-2">
            <MapPin size={14} className="text-gold-500 shrink-0" />
            <span>{project.location}</span>
          </div>
          <h3 className="text-lg font-semibold text-charcoal mb-1 group-hover:text-gold-600 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-charcoal/50 mb-4">{project.configuration}</p>

          <div className="flex items-end justify-between pt-4 border-t border-gold-100">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-charcoal/40">Starting at</p>
              <p className="text-gold-600 font-semibold">{project.price}</p>
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
