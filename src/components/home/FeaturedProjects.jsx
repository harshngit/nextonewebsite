import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '../common/ProjectCard'

export default function FeaturedProjects({ projects }) {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-24 bg-gold-50/30">
      <div className="container-xl">
        {projects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-charcoal/50"
          >
            No projects match your search. Try different keywords or filters.
          </motion.div>
        )}

        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm hover:gap-3 transition-all"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
