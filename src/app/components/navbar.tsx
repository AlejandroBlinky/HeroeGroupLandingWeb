 import Image from 'next/image';
 import logo from '../../img/logoheroegrup.png'
 import heroeracelogo from '../../img/díacarrera.png'
 import duatlonlogo from '../../img/logo_dua.png'
 import paranormallogo from '../../img/logoheroeparanormal.png'


export default function Navbar() {
    return (
      <nav >
        
        <div className="navbarcss1 shadow">
            
                
                <div className="navbarlogo"><a href="/"><Image   src={logo} alt="logo"></Image></a></div>
            <div className='navbarcss fw-bold  fs-5'>

            <div className='navbaroptionswithlogo  '>
            <Image src={heroeracelogo} alt='heroeracelogo' className='logosnavbar'></Image>
            <li className="navbarcssitems"><a href="/heroerace">Heroes Race</a></li>
            </div>


               <div className='navbaroptionswithlogo'>
               <Image src={duatlonlogo} alt='dualogo' className='logosnavbar'></Image>
               <li className="navbarcssitems"><a href="/duatlonlafalda">Duatlon La Falda</a></li>
               </div>
               
               <div className='navbaroptionswithlogo'>
               <Image src={paranormallogo} alt='paranormallogo' className='logosnavbar'></Image>
               <li className="navbarcssitems"><a href="/heroeraceparanormal">Heroes Race Paranormal</a></li>
               </div>
            

            
                <div className='navbaroptionswithlogo'>
                
               
                </div>
                
            </div>
                
           
           

          
        </div>
      </nav>
    );
  }