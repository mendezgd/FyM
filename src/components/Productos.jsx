import React, { useState, useEffect } from 'react';
import './Productos.css';

function Productos() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000130-10ebe10ec1/700/D_NQ_NP_987861-MLA40252890276_122019-O.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000134-a44bfa44c2/450/aqualaf.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000132-075b5075b9/450/griferia-peirano-logo.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000134-a44bfa44c2/450/aqualaf.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000137-4395d4395f/700/descarga.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000140-43eb643eb9/sherman_3.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000144-cdc67cdc6a/700/delta.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000146-b36b8b36bb/700/logo_quimica_Gali_sa_volumen.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000145-efdd5efdd9/450/logo_alarsa_con_slogan.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000136-7e3217e324/450/duke-logo.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000139-9232392325/logo-mi-pileta-alta-2012.webp?ph=d812edcd72',
        'https://d812edcd72.clvaw-cdnwnd.com/7640809d5040132e9db482644660e432/200000143-909899098d/450/valmec.webp?ph=d812edcd72'
    ];
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
        <div className="carouselProd">
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

export default Productos;
