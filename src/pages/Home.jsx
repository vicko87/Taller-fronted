import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Reservation from '../components/Reservation'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <section id="inicio"><Hero /></section>
      <section id="servicios"><Services /></section>
      <section id="nosotros"><About /></section>
      <section id="reserva"><Reservation /></section>
      <section id="contacto"><Contact /></section>
    </>
  )
}
