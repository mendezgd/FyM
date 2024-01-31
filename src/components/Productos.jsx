import React, { useState, useEffect } from 'react';
import './Productos.css';

function Productos() {
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
    const imagesToShow = 4;
    const [currentImages, setCurrentImages] = useState(images.slice(0, imagesToShow));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newImages = currentImages.map((image, index) => {
                const newIndex = (images.indexOf(image) + 1) % images.length;
                return images[newIndex];
            });
            setCurrentImages(newImages);
        }, 3500);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImages, images]);

    const goToNextImage = () => {
        const newImages = currentImages.map((image, index) => {
            const newIndex = (images.indexOf(image) + 1) % images.length;
            return images[newIndex];
        });
        setCurrentImages(newImages);
    };

    const goToPreviousImage = () => {
        const newImages = currentImages.map((image, index) => {
            const newIndex = (images.indexOf(image) - 1 + images.length) % images.length;
            return images[newIndex];
        });
        setCurrentImages(newImages);
    };

    return (
        <div className="carouselProd" id='productos'>
            <button className="carousel-button" onClick={goToPreviousImage}>
                &lt;
            </button>
            {currentImages.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index}`} />
            ))}
            <button className="carousel-button" onClick={goToNextImage}>
                &gt;
            </button>
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${currentImages.includes(image) ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Productos;
