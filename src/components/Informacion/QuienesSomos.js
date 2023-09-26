import React from 'react'
import './quienessomos.css'
import {useEffect, useState} from 'react'
import { Parallax, useParallax } from 'react-scroll-parallax';

import dataInfo from '../../DataInfo/DataInfo.js'

const QuienesSomos = () => {

  const [data, setData] = useState({})


  useEffect(() => {
    if(dataInfo){
      setData(dataInfo.dataInfo.InformacionEmpresarial)
    }  
  },[dataInfo])
  
  
  

  return (
    <Parallax  rotate={[-10, 15]} >
      <div className="QuienesSomosContainer">
        <div className="QuienesSomosConatinerTitle"> ¿QUIENES SOMOS?</div>
        <div className="QuienesSomosConatinerPharrafe">
          {data.quienesSomos}   
        </div>
       </div>
    </Parallax>
    
  )
}

export default QuienesSomos