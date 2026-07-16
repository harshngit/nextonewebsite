import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-gold-500 font-heading text-8xl font-bold">404</p>
        <h1 className="text-2xl font-semibold text-charcoal mt-4">Page Not Found</h1>
        <p className="text-charcoal/55 mt-2 max-w-sm mx-auto">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg mt-8 transition-colors"
        >
          <Home size={16} />
          Back to Home
        </Link>
      </div>
    </section>
  )
}
