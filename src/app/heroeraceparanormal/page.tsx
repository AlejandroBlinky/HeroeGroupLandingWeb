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
                  Elite: Para los más experimentados y valientes
                          8 km Elite Femenino
                          8 km Elite Masculino 
                  </li>
                  <li className='carrerasinfo'>
                  Individual Competitiva: Para los que prefieren enfrentar el desafío solos
                                          8 Km Femenino-Masculino
                                          Hasta 29
                                          De 30 a 39
                                          De 40 a 49
                                          Más 50
                  </li>
                  <li className='carrerasinfo'>
                  Dupla: Para los que quieren compartir el terror con un amigo o familiar
                          Dúo Femenino
                          Dúo Masculino
                          Dúo Mixto ·
                  </li>
                  <li className='carrerasinfo'>
                            Principiante: Para aquellos que se inician en el mundo de las carreras de obstáculos
                            5 km Femenino -Masculino 
                  </li>
                  <li className='carrerasinfo'>Kids: Para los más pequeños que quieren unirse a la aventura </li>
                  <li className='carrerasinfo'></li>
                  
                  
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
                <li className='carrerasinfo'>Domingo 1 Diciembre. 8hs</li>
                <li className='carrerasinfotitle mt-3'>Ubicación!</li>
                <li className='carrerasinfo'>📍Hotel Eden, La Falda.</li>
                <li className='carrerasinfo'>KIT PARA TODAS LAS CATEGORÍAS
incluye:
● Medalla finisher para todos los participantes
● Remera Héroe Race Edición Paranormal
● Obsequio de sponsor
● Vincha con el número del corredor
● Seguro por corredor
● Servicio médico en todo el circuito
● Servicio de fotografía
● Hidratación
● Sistema de cronometraje
● Locución y animación</li>
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
            <a href="https://drive.google.com/drive/mobile/folders/1jGmaCx4jQTikNQLtPCBSQe3LBbuPIRrC?usp=drive_link&fbclid=PAY2xjawG67cVleHRuA2FlbQIxMAABpnzkJ_sfYq7iSVVEYNTxvLuZZcl_P2idp6dJlFX35r3GUPbpeUdd8U1fQQ_aem_3KvTNZPsQKQ5ehqAVGwtKw" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary btn-lg' style={{ backgroundColor: 'rgb(18, 134, 147)', borderColor: 'rgb(18, 134, 147)' }}>Descarga tu foto</button>
            </a>
          </div>
        </div>
        <a href="https://cronometrajeinstantaneo.com/inscripciones/heroe-race-edicion-paranormal" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 p-5 btn-lg bg-success' style={{borderColor: 'white' }}>Inscripcion Individual!</button>
            </a>
            
            <a href="https://cronometrajeinstantaneo.com/inscripciones/heroe-race-edicion-paranormal/dupla" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 p-5 btn-lg bg-success' style={{borderColor: 'white' }}>Inscripcion Duplas!</button>
            </a>
      </div>
      <div className='tiemposyresultadosdiv'>  
              <a href="https://cronometrajeinstantaneo.com/resultados/heroe-race-edicion-paranormal/generales" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg'>Resultados y Tiempos 2024</button>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2 btn-lg'>Resultados y Tiempos 2025</button>
            </a>
            </div>
    </div>
  );
};

export default HeroeRaceParanormal;
