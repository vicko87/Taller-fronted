import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import.meta.env.VITE_API_URL

const STATUS_COLORS = {
    pendiente: 'bg-yellow-100 text-yellow-800',
    confirmada: 'bg-green-100 text-green-800',
    cancelada: 'bg-red-100 text-red-800'
}

export default function Admin() {
    const [reservations, setReservations] = useState([])
    const navigate = useNavigate()

    const fetchReservations = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/reservations`)
        const data = await res.json()
        setReservations(data)
    }


    useEffect(() => { 
         fetch(`${import.meta.env.VITE_API_URL}/reservations`)
            .then(res => res.json())
            .then(setReservations)
    }, [])

    const deleteReservation = async (id) => {
        if (!window.confirm('¿Eliminar esta reserva?')) return
        await fetch(`${import.meta.env.VITE_API_URL}/reservations/${id}`, { method: 'DELETE' })
        fetchReservations()
    }

     const updateStatus = async (id, status) => {
        await fetch(`${import.meta.env.VITE_API_URL}/reservations/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        })
        fetchReservations()
    }

    const logout = () => {
        localStorage.removeItem('admin');
        navigate('/login')
    }

    return (
         <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-400">🔧 TallerMec — Admin</h1>
        <button onClick={logout} className="text-gray-400 hover:text-white text-sm">Cerrar sesión</button>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Reservas ({reservations.length})</h2>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                {['Nombre','Teléfono','Servicio','Fecha','Hora','Estado','Acciones'].map(h => (
                  <th key={h} className="px-4 py-3 text-left">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reservations.map(r => (
                <tr key={r._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">{r.phone}</td>
                  <td className="px-4 py-3">{r.service}</td>
                  <td className="px-4 py-3">{new Date(r.date).toLocaleDateString('es-ES')}</td>
                  <td className="px-4 py-3">{r.time}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_COLORS[r.status]}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <select value={r.status} onChange={e => updateStatus(r._id, e.target.value)}
                      className="text-xs border border-gray-300 rounded px-2 py-1 mr-2">
                      <option value="pendiente">Pendiente</option>
                      <option value="confirmada">Confirmada</option>
                      <option value="cancelada">Cancelada</option>
                    </select>
                    <button onClick={() => deleteReservation(r._id)}
                      className="text-red-500 hover:text-red-700 text-xs font-medium">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {reservations.length === 0 && (
            <p className="text-center text-gray-500 py-8">No hay reservas aún</p>
          )}
        </div>
      </div>
    </div>
    )
}