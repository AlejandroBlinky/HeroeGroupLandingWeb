import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap esté importado
import wpp from '../../img/wpp.png'

const Contactos: React.FC = () => {
  return (
    <div className="contactos fixed-bottom d-flex flex-column align-items-end">
    <div style={{backgroundColor:'rgba(17, 19, 19,0.2)'}} className='card shadow d-flex justify-content-center align-items-center p-4'>
    <a href="https://wa.me/+5493548550304" target="_blank" rel="noopener noreferrer" className="mb-2">
        <Image src={wpp} className='' alt="WhatsApp" width={80} height={80} />
       
      </a>
      <p className='fw-bold text-center my-2'>Director de equipo.</p>
    </div>
    </div>
  );
};

export default Contactos;