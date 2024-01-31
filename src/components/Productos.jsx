import React, { useState } from 'react';
import './Productos.css';

function Productos() {
    const images = [
        { src: './alarsa.webp', href: 'https://alarsa.com.ar/' },
        { src: './aqualaf.webp', href: 'https://www.aqualaf.com.ar/' },
        { src: './delta.webp', href: 'https://www.fymsanitarios.com/' },
        { src: './duke.webp', href: 'https://www.dukeargentina.com/' },
        { src: './gali.webp', href: 'https://www.fymsanitarios.com/' },
        { src: './peirano.webp', href: 'https://griferiapeirano.com/' },
        { src: './pileta.webp', href: 'https://mipileta.com.ar/' },
        { src: './saiar.webp', href: 'https://saiar.com.ar/home' },
        { src: './tigre.webp', href: 'https://www.tigre.com.ar/' },
        { src: './valmec.webp', href: 'https://valmec.com.ar/' }
    ];
    const imagesToShow = 4;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImages = () => {
        setCurrentImageIndex((currentImageIndex + imagesToShow) % images.length);
    };

    const goToPreviousImages = () => {
        setCurrentImageIndex((currentImageIndex - imagesToShow + images.length) % images.length);
    };

    return (
        <div className="carouselProd" id='productos'>
            <button className='carousel-button' onClick={goToPreviousImages}>&lt;</button>
            {images.slice(currentImageIndex, currentImageIndex + imagesToShow).map((image, index) => (
                <a key={index} href={image.href} target="_blank" rel="noopener noreferrer">
                    <img src={image.src} alt="" />
                </a>
            ))}
            <button className='carousel-button' onClick={goToNextImages}>&gt;</button>
            <div className="carousel-indicators">
                {Array(Math.ceil(images.length / imagesToShow)).fill().map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${Math.floor(currentImageIndex / imagesToShow) === index ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Productos;
