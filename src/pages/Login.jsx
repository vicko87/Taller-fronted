import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [form, setForm] = useState({ user: '', pass: '' })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Credenciales incorrectas')
      localStorage.setItem('admin', 'true')
      navigate('/admin')
    } catch {
      setError('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">🔧 TallerMec</h1>
        <p className="text-center text-gray-500 mb-6">Panel de administración</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input name="user" required value={form.user}
              onChange={e => setForm({ ...form, user: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="admin" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input type="password" name="pass" required value={form.pass}
              onChange={e => setForm({ ...form, pass: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="••••••••" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}