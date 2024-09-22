import React from 'react';
import Image from 'next/image';
import duatlonraceimage from '../../img/duaimg.png'
import duatlonracelogo from '../../img/logo_dua.png'
import { FaMedal, FaUsers } from 'react-icons/fa';
import backgroundimg from '../../img/duatlonbackground.png'
import insta from '../../img/instagram.png'

const DuatlonRace = () => {
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
            <div className='card shadow p-3 mb-4 rounded h-100 cardbcolor'>
              <Image src={duatlonraceimage} alt='heroesimg' className='img-fluid rounded' />
              <div className='my-4'>
                <ul className='list-unstyled'>
                  <li className='carrerasinfotitle mb-3'>¡Categorías!</li>
                  <li className='carrerasinfo'>
                    <FaMedal className='me-2' /> Individual masculino femenino por edades
                  </li>
                  <li className='carrerasinfo'>
                    <FaMedal className='me-2' /> Postas masculino y femenino por sumatoria de edades
                  </li>
                  <li className='carrerasinfo'>
                    <FaUsers className='me-2' /> Postas mixtas
                  </li>
                  <li className='carrerasinfotitle mb-3'>Distancias!</li>
                  <li className='me-2'>- 5km de running</li>
                  <li className='me-2'>- 22km de ciclismo en montaña</li>
                  <li className='me-2'>- 3km de running final</li>

                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='col-md-6'>
            <div className='card shadow p-3 mb-4 rounded h-100 cardbcolor'>
              <Image src={duatlonracelogo} alt='heroeracecarrera' className='img-fluid mb-4 align-self-center' style={{width:'30%'}}/>
              <h1 className='carreratitle mb-3'>Duatlon La Falda!</h1>
              <p className='carreradescription'>El Duatlón no es solo una competencia; es un evento que celebra el esfuerzo, la resistencia y la determinación. Este desafío combina el ciclismo y el running, en un recorrido pensado para quienes buscan superarse.</p>
              <p className='carreradescription'>Cada pedalada y cada paso representan no solo un reto físico, sino también un tributo a la perseverancia. Cada participante tiene la oportunidad de descubrir su propio poder y espíritu de superación.</p>
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
            <a href="https://drive.google.com/file/d/1eXcbt2BKvFIlOq0cJVPajLyS8bZUfP_A/view" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Deslinde</button>
            </a>
            <a href="https://drive.google.com/file/d/1nO-Pn8sdeB7EJJ0cYdVHqD_38GLYnNCP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Apto Físico</button>
            </a>
            {/*<a href="https://cronometrajeinstantaneo.com/resultados/heroes-race/categorias" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Resultados y Tiempos</button>
            </a>*/}
            <a href="https://drive.google.com/drive/folders/1w-35Scucf06ydl5zSZbQS0jP0PfbgRZ_?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Descarga tu foto</button>
            </a>
            <a href="https://www.instagram.com/duatlon_lf/" target="_blank" rel="noopener noreferrer">
              <Image className='contactlogo' src={insta} alt='instalogo'></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuatlonRace;
