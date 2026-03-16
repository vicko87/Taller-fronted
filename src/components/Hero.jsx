export default function Hero() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center ">
            <div className="max-w-6xl mx-auto px-4 py-20 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Tu taller de confianza</h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-4">Servicio profesional, rápido y honesto para tu vehículo.</p>
                <p className="text-gray-400 mb-10 text-lg">Lunes a Sábado · 8:00 – 18:00 · Calle Principal 123</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#reserva" className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-300 transition-colors">Reserva cita</a>
                    <a href="#contacto" className="border-2 border-yellow-400 text-yellow-400 font-bold px-8 py-4 rounded-lg text-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">Contáctanos</a>
                    
                </div>
                </div>
        </div>
    )
}