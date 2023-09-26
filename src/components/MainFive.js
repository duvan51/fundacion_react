import React from 'react'
import { Button, Container } from 'reactstrap'
import imgDonacion from '../DataInfo/AreasNiños/supervision.png'


const MainFive = () => {
  
    
    return (
    <div className="MainFive">

        <img src={imgDonacion} className="MainFiveTitleImg"/>
        <div className="MainFiveTitle">¿como puedes ayudarnos?</div>
        
        <section className="MainFiveOptions">  

            <div className='MainFiveOptionsDonacion'>
              <div className='MainFiveTitleTarjet'>DONACION</div>
              <img src={imgDonacion} className="MainFiveTitleImg"/>
              <button className="MainFiveOptionsMicrodonacion"> 
                xxx
              </button>
            </div>
            
            <div className='MainFiveOptionsMicrodonacion'>
              <div className='MainFiveTitleTarjet'>MICRODONACIONES</div>
              <img src={imgDonacion} className="MainFiveTitleImg"/>
              <button className="MainFiveOptionsMicrodonacion"> 
                xxx
              </button>
            </div>
          
            <div className='MainFiveOptionsPatrocina'>
              <div className='MainFiveTitleTarjet'>PATROCINA UN NIÑO</div>
              <img src={imgDonacion} className="MainFiveTitleImg"/>
              <button className="MainFiveOptionsMicrodonacion"> 
                xxx
              </button>
            </div>

            <div className='MainFiveOptionsAyuda'>
              <div className='MainFiveTitleTarjet'>AYUDA UNA DE NUESTRAS FAMILIAS</div>
              <img src={imgDonacion} className="MainFiveTitleImg"/>
              <button className="MainFiveOptionsMicrodonacion"> 
                xxx
              </button>
            </div>

            <div className='MainFiveOptionsAyuda'>
              <div className='MainFiveTitleTarjet'>AYUDA UNA DE NUESTRAS FAMILIAS</div>
              <img src={imgDonacion} className="MainFiveTitleImg"/>
              <button className="MainFiveOptionsMicrodonacion"> 
                xxx
              </button>
            </div>

        </section>
    </div>




  )
}

export default MainFive