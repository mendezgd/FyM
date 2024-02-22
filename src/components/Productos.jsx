import React, { useState, useEffect } from 'react';
import './Productos.css';

function Productos() {
    const images = [
        { src: './alarsa.webp', href: 'https://alarsa.com.ar/'},
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const imagesToShow = isMobile ? 1 : 4;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const goToNextImages = () => {
        setCurrentImageIndex((currentImageIndex + imagesToShow) % images.length);
    };

    const goToPreviousImages = () => {
        setCurrentImageIndex((currentImageIndex - imagesToShow + images.length) % images.length);
    };

    const delay = 3000; // Retraso entre cambios de imagen en milisegundos

    useEffect(() => {
        const timer = setInterval(goToNextImages, delay);
        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, [currentImageIndex, goToNextImages]); // Dependencia en currentImageIndex y goToNextImages para reiniciar el temporizador cuando cambia la imagen

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
