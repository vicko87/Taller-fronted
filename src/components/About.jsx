import { CheckCircle2 } from 'lucide-react'



export default function About() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
            <p className="text-gray-600 text-lg mb-4">Somos un taller mecánico con más de <strong>15 años de experiencia</strong>, especializado en todo tipo de vehículos.</p>
            <p className="text-gray-600 text-lg mb-6">Contamos con equipos de diagnóstico de última generación y trabajamos con todas las marcas del mercado.</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { num: '15+', label: 'Años de experiencia' },
                { num: '2000+', label: 'Clientes satisfechos' },
                { num: '5000+', label: 'Vehículos reparados' },
              ].map(stat => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-yellow-500">{stat.num}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-white space-y-4">
            {[
             'Presupuesto gratuito sin compromiso',
             'Garantía en todas las reparaciones',
             'Diagnóstico computerizado',
             'Recogida y entrega del vehículo',
             'Piezas originales y de calidad',
            ].map(item => (
          <p key={item} className="flex items-center gap-3 text-lg">
        <CheckCircle2 size={20} className="text-yellow-400 shrink-0" /> {item}
          </p>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}