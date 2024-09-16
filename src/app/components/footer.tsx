import bluedamon from '../../img/sponsors/logobluedemon.png'
import cef from '../../img/sponsors/logocef.png'
import emer from '../../img/sponsors/logoemer.png'
import leon from '../../img/sponsors/logoleon.png'
import nutremax from '../../img/sponsors/logonutremax.png'
import Image from 'next/image'


export default function Footer() {
    return (
      <div className="footercss">
        
        <div >
          <ul className="footerinfo">
            <li>Info 1</li>
            <li>Info 1</li>
            <li>Info 1</li>
            <li>Info 1</li>
          </ul>
        </div>




        <div >
          <ul className="footersponsors">
            <li className='sponsorfooterlogo card bg-light'><Image src={bluedamon} alt='bluedamonlogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={cef} alt='ceflogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={emer} alt='emerlogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={leon} alt='leonlogo'></Image></li>
            <li className='sponsorfooterlogo'><Image src={nutremax} alt='nutremaxlogo'></Image></li>
            
          </ul>
        </div>
      </div>
    );
  }