import React from 'react'
import dataInfo from '../../DataInfo/DataInfo.js'
import {useEffect, useState} from 'react'



const QuienesSomosComplet = () => {
  
  const [data, setData] = useState({})


  useEffect(() => {
    if(dataInfo){
      setData(dataInfo.dataInfo.InformacionEmpresarial)
    }  
  },[dataInfo])
  
  
  console.log(data)
  


    return (
    
    <div className='QuienesSomos'>
        <div className='QuienesSomosHeader'>

        </div>
        <div className='QuienesSomosBody'>
            <div className='QuienesSomosBodyQuienesSomos'>
                <div className='QuienesSomosBodyQuienesSomosTitle'>
                        ¿ QUIENES SOMOS ?
                        <div className='line'></div>
                </div>

                <div className='QuienesSomosBodyQuienesSomosDescription'> 
                    {data.quienesSomos}
                </div>
            </div>
            <div className='QuienesSomosBodyMision'>
                <div className='QuienesSomosBodyMisionTitle'>
                        ¿ MISION ?
                    <div className='line'></div>
                </div>

                <div className='QuienesSomosBodyMisionDescription'> 
                    {data.vision}
                </div>
            </div>
            <div className='QuienesSomosBodyVision'>

            </div>
            <div className='QuienesSomosQueHacemos'>

            </div>
        </div>
    </div>
  )
}

export default QuienesSomosComplet