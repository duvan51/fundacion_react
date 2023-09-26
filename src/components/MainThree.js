import React from 'react'
import InfoServicios from './informacionServicios/InfoServicios'
import img from '../DataInfo/AreasNiños/1.png'



const MainThree = () => {
  return (
    <div className="MainThree">
        <div className='MainThreeTitle'>
            <div className='MainThreeTileT'>
              <img src={img} alt=''></img>
            </div>
            <div className='MainThreeTitleO'>
              <h1>
                Nuestras Actividades
              </h1>
            </div>
            
        </div>
        <InfoServicios />
    </div>
  )
}

export default MainThree