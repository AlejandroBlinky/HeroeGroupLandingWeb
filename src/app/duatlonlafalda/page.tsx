import React from 'react';
import Image from 'next/image';
import heroesraceimage from '../../img/heroeraceimg.jpg'
import heroeracelogo from '../../img/díacarrera.png'

const HeroeRace = () => {
  return (
    <div className='bg-light'>
    <div className='container text-center'>

      <div className='card bg-light shadow p-2 mb-5 align-items-center'>
      <Image src={heroeracelogo} alt='heroeracecarrera' className='logosnavbar'></Image>
      <h1 className='carreratitle'>Duatlon La Falda!</h1>
      <p className='carreradescription'>El Duatlón Vuelta al Dique La Falda es más que una competencia, es el desafío que estabas esperando. Sumate a esta prueba épica en un recorrido único entre montañas y paisajes naturales impresionantes. Prepará tus piernas para pedalear y correr al máximo, mientras vivís la adrenalina de superar cada kilómetro.
      </p>
      <p className=' carreradescription'>No importa si sos principiante o profesional, este duatlón tiene su lugar para vos. ¿Estás listo para enfrentarte a tus propios límites y disfrutar de un entorno inigualable?
      </p>
      </div>
      <div className='row'>

        <div className='col-md-6 gx-5 card shadow p-0 bg-light'>
          <div className='mb-4'>
            <Image src={heroesraceimage} alt='heroesimg' className='img'></Image>
          </div>
          <div className='mb-4'>
            <ul className='list-unstyled text-center card'>
              <li className='carrerasinfotitle'>Distancias!</li>
              <li className='carrerasinfo'>- 5km de running</li>
              <li className='carrerasinfo'>- 22km de ciclismo en montaña</li>
              <li className='carrerasinfo'>- 3km de running final</li>

              <li className='carrerasinfotitle'>- Categorias!</li>
              <li className='carrerasinfo'>- Individual masculino femenino por edades </li>
              <li className='carrerasinfo'>- Postas masculino y femenino por sumatoria de edades </li>
              <li className='carrerasinfo'>- Postas mixtas</li>
            </ul>
          </div>
          
         
        </div>
        
        <div className='col-md-6 gx-5 card shadow p-0 bg-light justify-content-center'>
          <div>
            <p className='carrerasinfotitle'>Links necesarios!</p>
          </div>
          <div className='mb-4'>
            <a href="https://drive.google.com/file/d/1PWFy1J-kToG10vKOcHJDn1tL49LR9Qfm/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className='btn btn-primary me-2' style={{backgroundColor:'rgb(18, 134, 147)', borderColor:'rgb(18, 134, 147)'}}>Deslinde</button>
            </a>
            <a href="https://drive.google.com/file/d/1j-TLKcfgaemN1dfGxlEN8Lj4mLHezrB2/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
               <button className='btn btn-primary me-2' style={{backgroundColor:'rgb(18, 134, 147)', borderColor:'rgb(18, 134, 147)'}}>Apto Fisico</button>
            </a>

           
          </div>
          <div>
            <p className='carrerasinfotitle'>Otros!</p>
            
            
            <a href="https://drive.google.com/drive/folders/1w-35Scucf06ydl5zSZbQS0jP0PfbgRZ_?usp=drive_link" target="_blank" rel="noopener noreferrer">
               <button className='btn btn-primary me-2' style={{backgroundColor:'rgb(18, 134, 147)', borderColor:'rgb(18, 134, 147)'}}>Descarga tu foto</button>
            </a>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroeRace;