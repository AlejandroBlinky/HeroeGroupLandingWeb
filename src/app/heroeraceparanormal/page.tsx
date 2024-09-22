import React from 'react';
import Image from 'next/image';
import hrparanormalimg from '../../img/paranormalimg.png';
import hrparanormallogo from '../../img/logoheroeparanormal.png'
import backgroundimg from '../../img/paranormalbackground.png'


const HeroeRaceParanormal = () => {
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
              <Image src={hrparanormalimg} alt='heroesimg' className='img-fluid rounded' />
              <div className='my-4'>
                <ul className='list-unstyled'>
                  <li className='carrerasinfotitle mb-3'>¡Categorías!</li>
                  <li className='carrerasinfo'>
                   Proximamente.
                  </li>
                
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className='col-md-6'>
            <div className='card shadow p-3 mb-4 rounded h-100 cardbcolor'>
              <Image src={hrparanormallogo} alt='heroeracecarrera' className='img-fluid mb-4 align-self-center' style={{width:'30%'}}/>
              <h1 className='carreratitle mb-3'>Heroe Race Paranormal!</h1>
              <p className='carreradescription'>Atrévete a vivir lo desconocido en Héroe Race Paranormal. Esta carrera única te llevará a enfrentar tus miedos mientras te desafías en un entorno repleto de sorpresas. Con obstáculos temáticos, pruebas llenas de adrenalina y una atmósfera cargada de misterio, solo los más valientes se atreven a completar este recorrido. ¿Estás listo para ser el héroe que desafía lo paranormal?</p>
              <ul className='list-unstyled'>
                <li className='carrerasinfotitle'>Fecha!</li>
                <li className='carrerasinfo'>Proximamente</li>
                <li className='carrerasinfotitle mt-3'>Ubicación!</li>
                <li className='carrerasinfo'>📍Hotel Eden, La Falda.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className='mt-5'>
          <h2 className='carrerasinfotitle mb-4 card p-4' style={{backgroundColor:'rgba(1,1,1,0.5)'}}>¡Links necesarios!</h2>
          <div className='carrerasbtn'>
            <a href="https://drive.google.com/file/d/1TTe7xgUUQL2VS_9k5qYlcQB3u7Hx_z-R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Deslinde</button>
            </a>
            <a href="https://drive.google.com/file/d/1-QFh55a08UN9IqBGPbJCENud5Wpu5iXT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Apto Físico</button>
            </a>
          {/*  <a href="https://cronometrajeinstantaneo.com/resultados/heroes-race/categorias" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Resultados y Tiempos</button>
            </a>
            <a href="https://snapshot.my.canva.site/linkinbio" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Descarga tu foto</button>
            </a>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeRaceParanormal;
