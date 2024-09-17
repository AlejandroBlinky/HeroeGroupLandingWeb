import React from 'react';
import Image from 'next/image';
import duatlonraceimage from '../../img/duaimg.png'
import duatlonracelogo from '../../img/logo_dua.png'
import { FaMedal, FaUsers } from 'react-icons/fa';
import backgroundimg from '../../img/duatlonbackground.png'


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
              <p className='carreradescription'>El Duatlón Vuelta al Dique La Falda es más que una competencia, es el desafío que estabas esperando. Sumate a esta prueba épica en un recorrido único entre montañas y paisajes naturales impresionantes. Prepará tus piernas para pedalear y correr al máximo, mientras vivís la adrenalina de superar cada kilómetro.</p>
              <p className='carreradescription'>No importa si sos principiante o profesional, este duatlón tiene su lugar para vos. ¿Estás listo para enfrentarte a tus propios límites y disfrutar de un entorno inigualable?</p>
              <ul className='list-unstyled'>
                <li className='carrerasinfotitle'>Fecha!</li>
                <li className='carrerasinfo'>14 de abril 2024</li>
                <li className='carrerasinfotitle mt-3'>Ubicación!</li>
                <li className='carrerasinfo'>📍 Villa Giardino, Córdoba.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className='mt-5'>
          <h2 className='carrerasinfotitle mb-4 card p-4' style={{backgroundColor:'rgba(1,1,1,0.5)'}}>¡Links necesarios!</h2>
          <div className='carrerasbtn'>
            <a href="https://drive.google.com/file/d/1PWFy1J-kToG10vKOcHJDn1tL49LR9Qfm/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuatlonRace;
