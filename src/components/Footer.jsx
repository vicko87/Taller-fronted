import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <p className="text-2xl font-bold text-yellow-400 mb-4">🔧 TallerMec</p>
      <div className="flex justify-center gap-6 mb-4 flex-wrap">
        <span className="flex items-center gap-1"><MapPin size={16} /> Calle Principal 123</span>
        <span className="flex items-center gap-1"><Phone size={16} /> +34 600 000 000</span>
        <span className="flex items-center gap-1"><Mail size={16} /> info@tallermec.com</span>
      </div>
      <p className="text-sm text-gray-600">© {new Date().getFullYear()} TallerMec. Todos los derechos reservados.</p>
        
      <a href="/login" className="text-gray-700 hover:text-gray-500 text-xs mt-2 inline-block">Acceso propietario</a>
    </footer>
  )
}