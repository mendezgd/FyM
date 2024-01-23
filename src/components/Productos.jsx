import React, { useState, useEffect } from 'react';
import './Productos.css';

function Productos() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        './alarsa.webp',
        './aqualaf.webp',
        './delta.webp',
        './duke.webp',
        './gali.webp',
        './peirano.webp',
        './pileta.webp',
        './saiar.webp',
        './tigre.webp',
        './valmec.webp',

    ];
    const imagesToShow = 3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Avanzar al siguiente índice de imagen
            setCurrentImage((currentImage + 1) % (images.length - imagesToShow + 1));
        }, 3500); // Cambia el intervalo a tu preferencia en milisegundos

        return () => {
            // Limpiar el temporizador cuando el componente se desmonte
            clearInterval(intervalId);
        };
    }, [currentImage, images]);

    const goToNextImage = () => {
        setCurrentImage((currentImage + 1) % (images.length - imagesToShow + 1));
    };

    const goToPreviousImage = () => {
        setCurrentImage((currentImage - 1 + (images.length - imagesToShow + 1)) % (images.length - imagesToShow + 1));
    };

    return (
        <div className="carouselProd">
            <button className="carousel-button" onClick={goToPreviousImage}>
                &lt;
            </button>
            {images.slice(currentImage, currentImage + imagesToShow).map((image, index) => (
                <img key={index} src={image} alt={`Image ${currentImage + index}`} />
            ))}
            <button className="carousel-button" onClick={goToNextImage}>
                &gt;
            </button>
        </div>
    );
}

export default Productos;