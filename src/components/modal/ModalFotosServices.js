import React, { useEffect, useState } from 'react'
import './modal.css'
import btnDonacion from '../../DataInfo/AreasNiños/iconos/dinero.png'

import CarrouselModal from './CarrouselModal.js'


const ModalFotosServices = ({datas}) => {
  
    const [data, setData]= useState({})


    useEffect (()=>{
        if(datas){
            setData(datas)
        }
    },[datas])

    
 return (
    <>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">{data.name}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <CarrouselModal images={data.images} />
            <div className="modal-body-description">
                <div className='modal-body-description-title'>
                    <div className='innteraction'>
                        <div className='suscripcion'>
                            <button>
                                <img src={btnDonacion} alt='' /> 
                            </button>
                        </div>
                        <div className='like'>
                            <button>
                                <img src={btnDonacion} alt='' /> 
                            </button>
                        </div>
                        <div className='donar'>
                            <button>
                                <img src={btnDonacion} alt='' /> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className='modal-body-description-body'>
                    {data.description}
                </div>
            </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>
        </div>
        </div>
    </div>
    </div>  
    
    </>
  )
}

export default ModalFotosServices