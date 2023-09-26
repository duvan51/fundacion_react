import React from 'react';
import {useEffect, useState} from 'react';
import dataInfo from '../../DataInfo/DataInfo.js'

import ModalFotosServices from '../modal/ModalFotosServices.js'


import './infoservicios.css'



const InfoServicios = () => {
  
  const [datas, setData] = useState([])
  const [databutton, setdatabutton] = useState({})


  useEffect(() => {
    if(dataInfo){
      setData(dataInfo.dataInfo.InfoServicios)
    }  
  },[dataInfo])

  
  

  
  const tarjet = datas.map((i)=>{
    
    return (
        <div key={i.id}  className="infoTarget" >
        <div className="InfoServiciosTarjet" key={i.name}>
            <div className="icon">
                <i className="fi fi-br-layout-fluid"></i>
            </div>
            <div className='name'>
                {i.name}
            </div>
            <button 
                className="btn" 
                type="button" 
                data-bs-toggle="modal" 
                data-bs-target="#staticBackdrop"
                onClick={()=> setdatabutton(i) }
            >
                
                visit
            </button>
            
        </div>
        <ModalFotosServices id='' datas={databutton} images='' />
        </div>
    )
  })
    return (
    <div className="InfoServicios">
        {tarjet}
    </div>
  )
}

export default InfoServicios