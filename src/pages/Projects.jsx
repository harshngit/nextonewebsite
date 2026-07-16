import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Search as SearchIcon } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import ProjectCard from '../components/common/ProjectCard'
import Dropdown from '../components/common/Dropdown'
import { projects, projectTypes, projectStatuses, cities } from '../data/projects'

export default function Projects() {
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [type, setType] = useState(searchParams.get('type') || '')
  const [status, setStatus] = useState('')
  const [city, setCity] = useState(searchParams.get('city') || '')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = query.trim()
        ? `${p.name} ${p.location} ${p.city}`.toLowerCase().includes(query.trim().toLowerCase())
        : true
      const matchesType = type ? p.type === type : true
      const matchesStatus = status ? p.status === status : true
      const matchesCity = city ? p.city === city : true
      return matchesQuery && matchesType && matchesStatus && matchesCity
    })
  }, [query, type, status, city])

  const resetFilters = () => {
    setQuery('')
    setType('')
    setStatus('')
    setCity('')
  }

  return (
    <>
      <PageBanner
        eyebrow="Explore"
        title="Our Projects"
        crumb="Projects"
        image="https://picsum.photos/seed/nextone-projects-banner/1600/900"
      />

      <section className="py-16 sm:py-20">
        <div className="container-xl">
          <div className="bg-white rounded-2xl border border-gold-100 shadow-sm p-5 sm:p-6 mb-12">
            <div className="flex items-center gap-2 text-charcoal/60 text-sm font-medium mb-4">
              <SlidersHorizontal size={16} className="text-gold-500" />
              Filter Projects
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="lg:col-span-2 flex items-center gap-2 px-3 py-2.5 rounded-lg border border-charcoal/15 focus-within:border-gold-500">
                <SearchIcon size={16} className="text-gold-500 shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name or location"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>

              <Dropdown compact value={type} onChange={setType} options={projectTypes} placeholder="All Types" />
              <Dropdown compact value={status} onChange={setStatus} options={projectStatuses} placeholder="All Status" />
              <Dropdown compact value={city} onChange={setCity} options={cities} placeholder="All Cities" />
            </div>

            {(query || type || status || city) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs text-gold-600 font-medium mt-4 hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>

          <p className="text-sm text-charcoal/50 mb-6">
            Showing {filtered.length} of {projects.length} projects
          </p>

          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-charcoal/50"
            >
              No projects match your filters. Try adjusting your search.
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}
