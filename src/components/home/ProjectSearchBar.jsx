import { motion } from 'framer-motion'
import { Search, MapPin, Home as HomeIcon, X } from 'lucide-react'
import Dropdown from '../common/Dropdown'
import { projectTypes, cities } from '../../data/projects'

export default function ProjectSearchBar({ keyword, setKeyword, type, setType, city, setCity }) {
  const hasActiveFilter = keyword || type || city

  const clearFilters = () => {
    setKeyword('')
    setType('')
    setCity('')
  }

  return (
    <div className="container-xl relative z-20 -mt-10 sm:-mt-14">
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => e.preventDefault()}
        className="relative z-20 bg-white rounded-3xl shadow-2xl p-4 sm:p-5 flex flex-col lg:flex-row gap-4 max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-3 flex-1 px-5 py-4 rounded-2xl bg-gold-50/60">
          <Search size={22} className="text-gold-500 shrink-0" />
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search projects, location, city..."
            className="w-full bg-transparent outline-none text-base text-charcoal placeholder:text-charcoal/40"
          />
        </div>

        <div className="lg:w-56">
          <Dropdown icon={HomeIcon} value={type} onChange={setType} options={projectTypes} placeholder="Property Type" />
        </div>

        <div className="lg:w-52">
          <Dropdown icon={MapPin} value={city} onChange={setCity} options={cities} placeholder="City" />
        </div>

        {hasActiveFilter ? (
          <button
            type="button"
            onClick={clearFilters}
            className="bg-charcoal hover:bg-charcoal/85 text-white font-semibold text-base px-8 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <X size={18} />
            Clear
          </button>
        ) : (
          <button
            type="submit"
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold text-base px-10 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Search
          </button>
        )}
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-wrap items-center justify-center gap-3 mt-6"
      >
        <span className="text-charcoal/45 text-sm">Popular:</span>
        {projectTypes.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(type === t ? '' : t)}
            className={`text-sm rounded-full px-4 py-1.5 border transition-colors ${
              type === t
                ? 'bg-gold-500 border-gold-500 text-white'
                : 'border-charcoal/15 text-charcoal/65 hover:border-gold-400 hover:text-gold-600'
            }`}
          >
            {t}
          </button>
        ))}
      </motion.div>
    </div>
  )
}
