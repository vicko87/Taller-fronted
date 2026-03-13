import { useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#reserva', label: 'Reservar' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#inicio" className="text-2xl font-bold text-yellow-400">🔧 TallerMec</a>
        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-yellow-400 transition-colors font-medium">{l.label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">{open ? '✕' : '☰'}</button>
      </div>
      {open && (
        <nav className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-yellow-400 transition-colors font-medium">{l.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}