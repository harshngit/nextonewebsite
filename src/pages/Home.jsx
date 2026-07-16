import { useState, useEffect, useMemo } from 'react'
import Hero from '../components/home/Hero'
import ProjectSearchBar from '../components/home/ProjectSearchBar'
import EnquiryModal from '../components/home/EnquiryModal'
import FeaturedProjects from '../components/home/FeaturedProjects'
import WhyChooseUs from '../components/home/WhyChooseUs'
import AchievementsStrip from '../components/home/AchievementsStrip'
import Testimonials from '../components/home/Testimonials'
import CtaBand from '../components/home/CtaBand'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [type, setType] = useState('')
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://api.nextonerealty.in/api/v1/public/projects')
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
  }, [])

  const visibleProjects = useMemo(() => {
    const hasActiveFilter = keyword.trim() || type || city

    if (!hasActiveFilter) return projects.slice(0, 3)

    return projects.filter((p) => {
      const matchesQuery = keyword.trim()
        ? `${p.name} ${p.developer} ${p.locality} ${p.city}`.toLowerCase().includes(keyword.trim().toLowerCase())
        : true
      const matchesCity = city ? p.city.toLowerCase() === city.toLowerCase() : true
      return matchesQuery && matchesCity
    })
  }, [keyword, type, city, projects])

  if (loading) {
    return null
  }

  return (
    <>
      <EnquiryModal />
      <Hero />
      <ProjectSearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        type={type}
        setType={setType}
        city={city}
        setCity={setCity}
      />
      <FeaturedProjects projects={visibleProjects} />
      <WhyChooseUs />
      <AchievementsStrip />
      <Testimonials />
      <CtaBand />
    </>
  )
}
