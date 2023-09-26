import React from 'react'
import QuienesSomos from './Informacion/QuienesSomos'
import imagen3 from './niños.jpg';
import { Parallax } from 'react-scroll-parallax';


const MainTwo = () => {


  return (
    
    <div className='MainTwo'>
      
      <div className='MainTwoSections'>
        <Parallax  speed={-10} >
        <div className='MainTwonSectionOne'>
          <div className='MainTwonSectionTwo'>
            <a href='/quienesSomos'>
              <button href="">
                SABER MAS
              </button>  
            </a>
          </div>
          <div className='QuienesSomos'>
            <QuienesSomos />
          </div>
        </div>
        </Parallax>
        <div className='MainTwoTitle'>
            <h1>
              CONOCENOS
            </h1>  
          </div>
       
        
      
      </div>
      
      <div className='MainTwoImage'>
        <img src={imagen3} className="d-block w-100" alt="..." />
      </div>
      
    </div>
    
  )
}

export default MainTwo