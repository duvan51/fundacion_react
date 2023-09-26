import React from 'react';
import imageTitle from '../../DataInfo/AreasNiños/caridad.png';





const DonacionPage = () => {
  return (
    <div className='DonacionPage'>
      <div className='DonacionTitle' >

        <div className='DonacionTitleImage'>
          <img src={imageTitle} alt='placeholder' className='imageTitle' />
        </div>
        <div className='DonacionTitl'>
          TU GRANITO DE ARENA CUENTA
        </div>
      </div>
     
    </div>
  )
}

export default DonacionPage