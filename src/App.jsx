import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Admin from './pages/Admin'


function PrivateRoute({ children }) {
  return localStorage.getItem('admin') ? children : <Navigate to='/login' />
}

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
              <div className="font-sans">
        <Header />
         <main><Home /></main>
          <Footer />
      </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App