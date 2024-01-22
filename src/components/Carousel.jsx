import React from 'react';
import './Carousel.css';

function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./fym1.jpeg" className="d-block w-100" alt="Imagenes del local" />
        </div>
        <div className="carousel-item">
          <img src="./fym2.jpeg" className="d-block w-100" alt="Imagenes del local" />
        </div>
        <div className="carousel-item">
          <img src="./fym3.jpeg" className="d-block w-100" alt="Imagenes del local" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
