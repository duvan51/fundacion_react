import React, { useEffect, useState } from 'react'
import './carrouselModal.css';

const CarrouselModal = ({images}) => {

  const [img, setImg] = useState([]);

  useEffect(()=>{
    if(images){
      setImg(images);
    }

  },[images])
  
  const imags = img.map((x)=>{
    return (
      <div className="carousel-item" key={x}>
            <img src={x} className="d-block w-100" alt="..." />
      </div>
    )
  })

  return (
    <div className="CarrouselModal">    
      <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img[1]} className="d-block w-100" alt="..." />
          </div>
          {imags}
        </div>
        <button className="carousel-control-prev btn-moddal-carousel" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next btn-moddal-carousel" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default CarrouselModal