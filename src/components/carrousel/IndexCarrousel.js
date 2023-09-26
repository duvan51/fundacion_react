import React from 'react'

import './carrousel.css'

/** images para el carrousel */
import imagen1 from './imagesCarrousel/carrousel1.jpg';
import imagen2 from './imagesCarrousel/carrousel2.jpg';
import imagen3 from './imagesCarrousel/carrousel3.jpg';
import { Parallax } from 'react-scroll-parallax';


const IndexCarrousel = () => {
  return (
    <>
    <Parallax speed={-28}>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={imagen1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block cap">
        <h5>¿Quieres el cambio?</h5>
        <p> Empieza tu dandonos el ejemplo </p>
      </div>
      </div>
    <div className="carousel-item">
      <img src={imagen2} className="d-block w-100" alt="..." />
      <div className="carousel-caption  d-md-block cap">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-md-block cap">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </Parallax>

    </>
  );
}

export default IndexCarrousel