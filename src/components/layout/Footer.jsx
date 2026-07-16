import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from '../common/SocialIcons'
import logo from '../../assets/logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Contact Us', to: '/contact' },
]

const propertyTypes = ['Apartments', 'Villas', 'Plots', 'Commercial Spaces']

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-xl py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Nextone Realty" className="h-11 w-11 object-contain shrink-0" />
            <span className="font-heading text-xl font-semibold leading-none text-white">
              Nextone
              <span className="block text-[11px] tracking-[0.3em] font-sans font-medium text-gold-400 uppercase mt-0.5">
                Realty
              </span>
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed">
            Building trusted addresses for over 15 years — homes, villas, plots and commercial
            spaces designed for real life.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[FacebookIcon, InstagramIcon, LinkedinIcon, XIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gold-500 transition-colors"
                aria-label="social link"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-gold-400 uppercase text-sm tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/60 hover:text-gold-300 text-sm transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-gold-400 uppercase text-sm tracking-wide">Property Types</h4>
          <ul className="space-y-3">
            {propertyTypes.map((type) => (
              <li key={type}>
                <Link to="/projects" className="text-white/60 hover:text-gold-300 text-sm transition-colors">
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-5 text-gold-400 uppercase text-sm tracking-wide">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-400 shrink-0 mt-0.5" />
              <span>
                Main office 1st floor, Raheja Classique, Royal Sands office 103, Lane, Sastri
                Nagar Rd, Phase D, Mumbai, Maharashtra
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-gold-400 shrink-0" />
              <a href="tel:+919579305922" className="hover:text-gold-300 transition-colors">
                +91 95793 05922
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-gold-400 shrink-0" />
              <a href="mailto:info@nextonerealty.in" className="hover:text-gold-300 transition-colors">
                info@nextonerealty.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Nextone Realty. All rights reserved.</p>
          <p>RERA registered developer &middot; Designed for real life.</p>
        </div>
      </div>
    </footer>
  )
}
