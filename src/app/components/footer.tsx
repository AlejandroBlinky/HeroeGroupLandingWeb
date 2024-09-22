import bluedamon from '../../img/sponsors/logobluedemon.png'
import cef from '../../img/sponsors/logocef.png'
import emer from '../../img/sponsors/logoemer.png'
import leon from '../../img/sponsors/logoleon.png'
import nutremax from '../../img/sponsors/logonutremax.png'
import vigfarma from '../../img/sponsors/logovigfarma.png'
import Image from 'next/image'


export default function Footer() {
    return (
      <div className="footercss">
        
      




        <div >
          <ul className="">
            <div className='footersponsors'>
            <li className='sponsorfooterlogo card'><Image src={vigfarma} alt='vigfarmalogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={cef} alt='ceflogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={emer} alt='emerlogo'></Image></li>
            </div>
            <div className='footersponsors'>
            <li className='sponsorfooterlogo'><Image src={leon} alt='leonlogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={nutremax} alt='nutremaxlogo'></Image></li>
            <li className='sponsorfooterlogo card bg-light'><Image src={bluedamon} alt='bluedamonlogo'></Image></li>
            </div>
            
          </ul>
        </div>
      </div>
    );
  }