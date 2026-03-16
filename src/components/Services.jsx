import { Wrench, Circle, Zap, Droplets, Wind, ScanSearch } from 'lucide-react'

const services = [
   { icon: <Wrench size={40} className="text-yellow-500" />, name: 'Mecánica General', desc: 'Revisión completa del motor, frenos, suspensión y más.', price: 'Desde $50' },
  { icon: <Circle size={40} className="text-yellow-500" />, name: 'Cambio de Neumáticos', desc: 'Montaje, equilibrado y alineación de ruedas.', price: 'Desde $30' },
  { icon: <Zap size={40} className="text-yellow-500" />, name: 'Electricidad', desc: 'Diagnóstico y reparación del sistema eléctrico.', price: 'Desde $40' },
  { icon: <Droplets size={40} className="text-yellow-500" />, name: 'Cambio de Aceite', desc: 'Aceite sintético o mineral con filtro incluido.', price: 'Desde $25' },
  { icon: <Wind size={40} className="text-yellow-500" />, name: 'Aire Acondicionado', desc: 'Recarga de gas y revisión del sistema de climatización.', price: 'Desde $60' },
  { icon: <ScanSearch size={40} className="text-yellow-500" />, name: 'Diagnóstico PC', desc: 'Lectura de errores con scanner profesional OBD2.', price: 'Desde $20' },
]

export default function Services () {
  return (
   <div className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-400 mb-4">Nuestros Servicios</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Todo lo que tu vehículo necesita en un solo lugar</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map(s => (
            <div key={s.name} className="bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-300">   
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{s.name}</h3>
              <p className="text-gray-500 mb-4">{s.desc}</p>
              <p className="text-yellow-500 font-bold text-lg">{s.price}</p>
            </div>
           ))}

        </div>

    </div>

   </div>
  )
}
