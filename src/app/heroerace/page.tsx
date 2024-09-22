import React from 'react';
import Image from 'next/image';
import heroesraceimage from '../../img/heroeraceimg.jpg'
import heroeracelogo from '../../img/díacarrera.png'
import { FaChild, FaRunning, FaMedal, FaUsers } from 'react-icons/fa';
import backgroundimg from '../../img/heroeracebackground.png'
import insta from '../../img/instagram.png';

const HeroeRace = () => {
  return (
    <div className='carrerasdiv py-5'  style={{
      backgroundImage: `url(${backgroundimg.src})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Ocupa toda la altura de la página
      padding: '2rem'
    }}>
      <div className='container text-center'>
        <div className='row gx-5 d-flex'>

          {/* Left Column */}
          <div className='col-md-6'>
            <div className='card shadow p-3 mb-2 rounded h-100 cardbcolor'>
              <Image src={heroesraceimage} alt='heroesimg' className='img-fluid rounded' />
              <div className='my-4'>
                <ul className='list-unstyled'>
                  <li className='carrerasinfotitle mb-3'>¡Categorías!</li>
                  <li className='carrerasinfo'>
                    <FaChild className='me-2' /> Kids: 1km.
                  </li>
                  <li className='carrerasinfo'>
                    <FaRunning className='me-2' /> Participativa: 5km.
                  </li>
                  <li className='carrerasinfo'>
                    <FaMedal className='me-2' /> Elite: 8km.
                  </li>
                  <li className='carrerasinfo'>
                    <FaMedal className='me-2' /> Competitiva: 8km.
                  </li>
                  <li className='carrerasinfo'>
                    <FaUsers className='me-2' /> Dupla: 8km.
                  </li>
                  <li className='carrerasinfo'>Mixto, femenino y masculino</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='col-md-6'>
            <div className='card shadow p-3 mb-2 rounded h-100 cardbcolor'>
              <Image src={heroeracelogo} alt='heroeracecarrera' className='img-fluid mb-4 align-self-center' style={{width:'30%'}}/>
              <h1 className='carreratitle mb-3'>Heroe Race!</h1>
              <p className='carreradescription'>En Héroe Race, nuestra misión es combinar la pasión por el deporte con un tributo especial a nuestros héroes, en particular a los excombatientes de Malvinas. Cada carrera que organizamos es más que un desafío físico; es un homenaje al coraje, la resistencia y el sacrificio.</p>
              <p className='carreradescription'> Corremos en memoria de los valientes que defendieron nuestra patria, llevando ese espíritu de lucha en cada obstáculo y cada kilómetro. En Héroe Race, todos somos héroes en nuestro propio camino.</p>
              <ul className='list-unstyled'>
                <li className='carrerasinfotitle'>Fecha!</li>
                <li className='carrerasinfo'>Por decidir..</li>
                <li className='carrerasinfotitle mt-3'>Ubicación!</li>
                <li className='carrerasinfo'>📍Por decidir..</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className='mt-5'>
          <h2 className='carrerasinfotitle mb-4 card p-4' style={{backgroundColor:'rgba(1,1,1,0.5)'}}>¡Links necesarios!</h2>
          <div className='carrerasbtn'>
            <a href="https://drive.google.com/file/d/1PWFy1J-kToG10vKOcHJDn1tL49LR9Qfm/view" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Deslinde</button>
            </a>
            <a href="https://drive.google.com/file/d/1j-TLKcfgaemN1dfGxlEN8Lj4mLHezrB2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Apto Físico</button>
            </a>
            <a href="https://cronometrajeinstantaneo.com/resultados/heroes-race/categorias" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Resultados y Tiempos</button>
            </a>
            <a href="https://snapshot.my.canva.site/linkinbio" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Descarga tu foto</button>
            </a>
            <a href="https://www.instagram.com/heroerace_ok/" target="_blank" rel="noopener noreferrer">
              <Image className='contactlogo' src={insta} alt='instalogo'></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeRace;
