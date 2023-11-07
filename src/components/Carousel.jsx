import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Avanzar al siguiente índice de imagen
      setCurrentImage((currentImage + 1) % images.length);
    }, 3500); // Cambia el intervalo a tu preferencia en milisegundos

    return () => {
      // Limpiar el temporizador cuando el componente se desmonte
      clearInterval(intervalId);
    };
  }, [currentImage, images]);

  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button" onClick={goToPreviousImage}>
        &lt;
      </button>
      <img src={images[currentImage]} alt={`Image ${currentImage}`} />
      <button className="carousel-button" onClick={goToNextImage}>
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
