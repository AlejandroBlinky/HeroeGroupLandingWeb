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
      <h1 className='carreratitle'>Heroe Race!</h1>
      <p className='carreradescription'>Prepárate para una carrera OCR única en Altos de San Pedro, Villa Giardino. En Héroe Race, no solo te vas a ensuciar, saltar, trepar y superar obstáculos, sino que también vas a poner a prueba tu cuerpo y tu mente en un circuito diseñado con inspiración militar. </p>
      <p className=' carreradescription'>Conectate con la naturaleza y viví la adrenalina de superar cada desafío, mientras honramos a nuestros héroes de Malvinas. ¿Estás listo para darlo todo?</p>
      </div>
      <div className='row'>

        <div className='col-md-6 gx-5 card shadow p-0 bg-light'>
          <div className='mb-4'>
            <Image src={heroesraceimage} alt='heroesimg' className='img'></Image>
          </div>
          <div className='mb-4'>
            <ul className='list-unstyled text-center card'>
              <li className='carrerasinfotitle'>Distancias!</li>
              <li className='carrerasinfo'>- Kids: 1km.</li>
              <li className='carrerasinfo'>- Participativa: 5km.</li>
              <li className='carrerasinfo'>- Elite: 8km</li>
              <li className='carrerasinfo'>- Competitiva: 8km</li>
              <li className='carrerasinfo'>- Dupla: 8km</li>
              <li className='carrerasinfo'>mixto, femenino y masculino!</li>
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
            <a href="https://cronometrajeinstantaneo.com/resultados/heroes-race/categorias" target="_blank" rel="noopener noreferrer">
               <button className='btn btn-primary me-2' style={{backgroundColor:'rgb(18, 134, 147)', borderColor:'rgb(18, 134, 147)'}}>Resultados y Tiempos</button>
            </a>
            <a href="https://snapshot.my.canva.site/linkinbio" target="_blank" rel="noopener noreferrer">
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