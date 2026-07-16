import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, Search as SearchIcon, Loader2 } from 'lucide-react'
import PageBanner from '../components/common/PageBanner'
import ProjectCard from '../components/common/ProjectCard'
import EnquiryForm from '../components/common/EnquiryForm'

export default function Projects() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  
  // New filter states (city, location, search)
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams()
        if (search) params.append('search', search)
        if (city) params.append('city', city)
        if (location) params.append('location', location)
        
        const response = await fetch(`https://api.nextonerealty.in/api/v1/public/projects?${params.toString()}`)
        const result = await response.json()
        if (result.success) {
          setProjects(result.data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [search, city, location])

  const resetFilters = () => {
    setSearch('')
    setCity('')
    setLocation('')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-gold-500" size={48} />
      </div>
    )
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-charcoal/15 focus-within:border-gold-500">
                <SearchIcon size={16} className="text-gold-500 shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or developer"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>

              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-charcoal/15 focus-within:border-gold-500">
                <SearchIcon size={16} className="text-gold-500 shrink-0" />
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Filter by city"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>

              <div className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-charcoal/15 focus-within:border-gold-500">
                <SearchIcon size={16} className="text-gold-500 shrink-0" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Filter by locality"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {(search || city || location) && (
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
            Showing {projects.length} projects
          </p>

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
              className="text-center py-20 text-charcoal/50"
            >
              No projects match your filters. Try adjusting your search.
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-xl">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gold-100 shadow-sm p-6 sm:p-8">
            <EnquiryForm
              compact
              title="Get in Touch"
              subtitle="Interested in a project? Let's connect and find your perfect space."
            />
          </div>
        </div>
      </section>
    </>
  )
}
