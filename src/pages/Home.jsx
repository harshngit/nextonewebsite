import { useMemo, useState } from 'react'
import Hero from '../components/home/Hero'
import ProjectSearchBar from '../components/home/ProjectSearchBar'
import EnquiryModal from '../components/home/EnquiryModal'
import FeaturedProjects from '../components/home/FeaturedProjects'
import WhyChooseUs from '../components/home/WhyChooseUs'
import AchievementsStrip from '../components/home/AchievementsStrip'
import Testimonials from '../components/home/Testimonials'
import CtaBand from '../components/home/CtaBand'
import { projects } from '../data/projects'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [type, setType] = useState('')
  const [city, setCity] = useState('')

  const visibleProjects = useMemo(() => {
    const hasActiveFilter = keyword.trim() || type || city

    if (!hasActiveFilter) return projects.filter((p) => p.featured)

    return projects.filter((p) => {
      const matchesQuery = keyword.trim()
        ? `${p.name} ${p.location} ${p.city}`.toLowerCase().includes(keyword.trim().toLowerCase())
        : true
      const matchesType = type ? p.type === type : true
      const matchesCity = city ? p.city === city : true
      return matchesQuery && matchesType && matchesCity
    })
  }, [keyword, type, city])

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
