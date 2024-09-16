'use client'
import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos
import slidr1 from '../img/sliderhome/slidr1.jpg';
import slidr2 from '../img/sliderhome/slidr2.jpg';
import slidr3 from '../img/sliderhome/slidr3.jpg';
import slidr4 from '../img/sliderhome/slidr4.jpg';
import slidr5 from '../img/sliderhome/slidr5.jpg';
import slidr6 from '../img/sliderhome/slidr6.jpg';
import slidr7 from '../img/sliderhome/slidr7.jpg';
import slidr8 from '../img/sliderhome/slidr8.jpg';


export default function Home() {
  return (
    <div className='bg-light'>
      
     

      <div className=''>
      <Carousel  
      
        showArrows={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        transitionTime={500}
        stopOnHover={false}
        dynamicHeight={false} 
        showThumbs={false}
        className='imgslider card shadow bg-dark mb-5'
        >
          


          <div>
            <Image src={slidr1} alt='slidr1'></Image>
            
          </div>
          <div>
          <Image src={slidr2} alt='slidr2'></Image>
            
          </div>
          <div>
          <Image src={slidr3} alt='slidr3'></Image>
           
          </div>
          <div>
          <Image src={slidr4} alt='slidr4'></Image>
            
          </div>
          <div>
          <Image src={slidr5} alt='slidr5'></Image>
            
          </div>
          <div>
          <Image src={slidr6} alt='slidr6'></Image>
            
          </div>
          <div>
          <Image src={slidr7} alt='slidr7'></Image>
            
          </div>
          <div>
          <Image src={slidr8} alt='slidr8'></Image>
            
          </div>
        </Carousel>
        </div>
        <div className='text-center mb-5 container shadow p-5 card border-dark'>
      <h1 className='carreratitle'>HÉROE GROUP: Desafíos desde Punilla, Córdoba </h1>
      <p className='carreradescription mb-5'>En Héroe Group, diseñamos carreras que te empujan a darlo todo. Desde el corazón de Punilla, Córdoba, te invitamos a vivir experiencias que combinan naturaleza y adrenalina, donde cada obstáculo es una prueba de tu fuerza y valentía. Nos inspiramos en el coraje de los héroes, creando desafíos que te harán descubrir de qué estás hecho.
¿Estás listo para enfrentarte al terreno y superar tus propios límites?
</p>
<h1 className='carreratitle'>¿Quiénes somos en Héroe Group?</h1>
<p className='carreradescription mb-5'>Somos un equipo apasionado por los desafíos, la naturaleza y el deporte. Desde Punilla, Córdoba, organizamos experiencias únicas que combinan adrenalina, obstáculos y superación personal. Cada una de nuestras carreras está diseñada para llevarte más allá de tus límites, conectarte con el entorno y revivir la historia de héroes que nos inspiran. En Héroe Group, no solo competís, te transformás.</p>
      </div>
      </div>
    
  );
}
