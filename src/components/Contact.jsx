import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useState } from 'react'


export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [sent, setSent] = useState(false)
    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault(); setSent(true) }

        return (
              <div className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Contacto</h2>
        <p className="text-center text-gray-500 mb-12 text-lg">¿Tienes alguna pregunta? Escríbenos.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl p-8 shadow">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✉️</div>
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-500">Te responderemos lo antes posible.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-yellow-500 font-medium hover:underline">Enviar otro mensaje</button>
              </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="¿En qué te podemos ayudar?" />
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors">Enviar mensaje</button>
              </form>
            )}
          </div>
          <div className="space-y-6">
           // En la sección de info reemplaza los párrafos con:
          <p className="flex items-center gap-3 text-gray-700"><MapPin size={20} className="text-yellow-500" /> Calle Principal 123, Tu Ciudad</p>
          <p className="flex items-center gap-3 text-gray-700"><Phone size={20} className="text-yellow-500" /> +34 600 000 000</p>
          <p className="flex items-center gap-3 text-gray-700"><Mail size={20} className="text-yellow-500" /> info@tallermec.com</p>
          <p className="flex items-center gap-3 text-gray-700"><Clock size={20} className="text-yellow-500" /> Lun–Sáb: 8:00 – 18:00</p>

            <div className="rounded-xl overflow-hidden shadow">
              <iframe title="Ubicación del taller" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6!2d-3.7!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiAzwrA0MicwMC4wIlc!5e0!3m2!1ses!2ses!4v1234567890" width="100%" height="280" style={{border:0}} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
     
        
