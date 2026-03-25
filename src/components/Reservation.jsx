import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', time: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Error al enviar la reserva')
      setSent(true)
      setForm({ name: '', phone: '', service: '', date: '', time: '' })
    } catch {
      setError('Hubo un error al enviar tu reserva. Por favor, inténtalo de nuevo.')
    }
  }

  return (
    <div className="bg-white py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Reservar Cita</h2>
        <p className="text-center text-gray-500 mb-10">Completa el formulario y te confirmamos por teléfono.</p>
        {sent ? (
          <div className="bg-green-100 border border-green-400 text-green-800 rounded-xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">¡Solicitud enviada!</h3>
            <p>Nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => {
                setSent(false)
                setForm({ name: '', phone: '', service: '', date: '', time: '' })
                setError(null)
              }}
              className="mt-6 bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-yellow-300">
              Nueva reserva
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
              <input name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
              <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="+34 600 000 000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servicio *</label>
              <select name="service" required value={form.service} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="">Selecciona un servicio</option>
                <option>Mecánica General</option>
                <option>Cambio de Neumáticos</option>
                <option>Electricidad</option>
                <option>Cambio de Aceite</option>
                <option>Aire Acondicionado</option>
                <option>Diagnóstico PC</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
                <input type="date" name="date" required value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
                <select name="time" required value={form.time} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="">Selecciona</option>
                  {['08:00','09:00','10:00','11:00','12:00','13:00','15:00','16:00','17:00'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-lg text-lg hover:bg-yellow-300 transition-colors">Confirmar reserva</button>
          </form>
        )}
      </div>
    </div>
  )
}