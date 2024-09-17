import React from 'react';
import Image from 'next/image';
import heroesraceimage from '../../img/heroeraceimg.jpg'
import heroeracelogo from '../../img/díacarrera.png'
import { FaChild, FaRunning, FaMedal, FaUsers } from 'react-icons/fa';
import backgroundimg from '../../img/heroeracebackground.png'


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
              <p className='carreradescription'>Prepárate para una carrera OCR única en Altos de San Pedro, Villa Giardino. En Héroe Race, no solo te vas a ensuciar, saltar, trepar y superar obstáculos, sino que también vas a poner a prueba tu cuerpo y tu mente en un circuito diseñado con inspiración militar.</p>
              <p className='carreradescription'>Conéctate con la naturaleza y vive la adrenalina de superar cada desafío, mientras honramos a nuestros héroes de Malvinas. ¿Estás listo para darlo todo?</p>
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

export default HeroeRace;
