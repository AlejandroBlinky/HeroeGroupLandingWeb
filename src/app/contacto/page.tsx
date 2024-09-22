import React from 'react';
import wppimg from '../../img/wpp.png';
import backgroundimg from '../../img/heroeracebackground.png'
import Image from 'next/image';

const Contacto = () => {
  return (
    <div className='carrerasdiv py-5'  style={{
      backgroundImage: `url(${backgroundimg.src})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh', // Ocupa toda la altura de la página
      padding: '2rem'
    }}>
     
    <div className='card shadow bg-dark contact'>
        <div className='m-2'><a href='https://wa.me/5493548550304'><Image src={wppimg} alt='wppimg' className='contactlogo  shadow'>
        
        </Image></a></div>
        <p className='text-white text-center m-5' style={{fontSize:'1.2rem'}}>- Director de equipo.</p>
    </div>
    </div>
  );
};

export default Contacto;
