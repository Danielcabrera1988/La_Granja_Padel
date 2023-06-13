import clasificatorio from '../assets/images/clasificatorio_nacionales_fap.jpg'
import { Card } from '../components/home/Card'
export const Home = () => {
  return (
    <div className='animate__animated animate__slideInLeft'>
      <section>
        <header>Fechas Clasificatorios FAP</header>
        <img src={clasificatorio} alt="img-casificatorio-fap" style={{ maxWidth: '200px' }} />
        <br />
        <a href="https://www.facebook.com/profile.php?id=100012789878656">Ver mas...</a>
      </section>
      <Card/>
    </div>
  )
}
