import { useEffect, useRef, useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function Dropdown({ icon: Icon, value, onChange, options, placeholder, compact = false }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={
          compact
            ? `flex items-center gap-2 w-full px-3 py-2.5 rounded-lg border text-left transition-colors ${
                open ? 'border-gold-500' : 'border-charcoal/15'
              } bg-white`
            : 'flex items-center gap-3 w-full px-5 py-4 rounded-2xl bg-gold-50/60 text-left'
        }
      >
        {Icon && <Icon size={compact ? 16 : 22} className="text-gold-500 shrink-0" />}
        <span
          className={`flex-1 truncate ${compact ? 'text-sm' : 'text-base'} ${
            value ? 'text-charcoal' : compact ? 'text-charcoal/50' : 'text-charcoal/45'
          }`}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          size={compact ? 15 : 18}
          className={`text-charcoal/35 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-gold-100 py-2 z-30 max-h-64 overflow-y-auto">
          <button
            type="button"
            onClick={() => {
              onChange('')
              setOpen(false)
            }}
            className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-gold-50 ${
              !value ? 'text-gold-600 font-medium' : 'text-charcoal/65'
            }`}
          >
            {placeholder}
            {!value && <Check size={15} />}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors hover:bg-gold-50 ${
                value === opt ? 'text-gold-600 font-medium bg-gold-50/60' : 'text-charcoal/65'
              }`}
            >
              {opt}
              {value === opt && <Check size={15} />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
