import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt="Nextone Realty" className="h-11 w-11 object-contain shrink-0" />
          <span className={`font-heading text-xl font-semibold leading-none ${scrolled ? 'text-charcoal' : 'text-white'}`}>
            Nextone
            <span className="block text-[11px] tracking-[0.3em] font-sans font-medium text-gold-500 uppercase mt-0.5">
              Realty
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive
                    ? 'text-gold-500'
                    : scrolled
                    ? 'text-charcoal/80 hover:text-gold-500'
                    : 'text-white/90 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919579305922"
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? 'text-charcoal/80' : 'text-white/90'}`}
          >
            <Phone size={16} className="text-gold-500" />
            +91 95793 05922
          </a>
          <Link
            to="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Enquire Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-charcoal' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden mt-3"
          >
            <div className="container-xl py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium ${isActive ? 'text-gold-500' : 'text-charcoal/80'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-gold-500 text-white text-center font-semibold px-5 py-3 rounded-lg mt-2"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
