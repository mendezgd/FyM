import { useEffect, useRef } from "react";
import "./Swiper.css";

const Swiper = () => {
    const swiperContainerRef = useRef(null);

    useEffect(() => {
        if (swiperContainerRef.current && !swiperContainerRef.current.swiper) {
            new window.Swiper(swiperContainerRef.current, {
                // Optional parameters
                direction: 'horizontal',
                speed: 400,
                spaceBetween: 100,
                slidesPerView: 4,
                slidesPerGroup: 3,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar',
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 4,
                        slidesPerGroup: 3,
                        spaceBetween: 30
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <div ref={swiperContainerRef} className="swiper" style={{ backgroundColor: 'white' }}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><a href="https://alarsa.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./alarsa.webp" alt="alarsa logo" /></a></div>
                    <div className="swiper-slide"><a href="https://www.aqualaf.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./aqualaf.webp" alt="aqualaf logo" /></a></div>
                    <div className="swiper-slide"><a href="https://www.fundiciondelta.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./delta.webp" alt="delta logo" /></a></div>
                    <div className="swiper-slide"><a href="https://www.dukeargentina.com/" target="_blank" rel="noopener noreferrer"><img src="./duke.webp" alt="duke logo" /></a></div>
                    <div className="swiper-slide"><a href="http://www.quimicagali.com/" target="_blank" rel="noopener noreferrer"><img src="./gali.webp" alt="gali logo" /></a></div>
                    <div className="swiper-slide"><a href="https://griferiapeirano.com/" target="_blank" rel="noopener noreferrer"><img src="./peirano.webp" alt="peirano logo" /></a></div>
                    <div className="swiper-slide"><a href="https://mipileta.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./pileta.webp" alt="pileta logo" /></a></div>
                    <div className="swiper-slide"><a href="https://saiar.com.ar/home" target="_blank" rel="noopener noreferrer"><img src="./saiar.webp" alt="saiar logo" /></a></div>
                    <div className="swiper-slide"><a href="https://www.tigre.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./tigre.webp" alt="tigre logo" /></a></div>
                    <div className="swiper-slide"><a href="https://valmec.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./valmec.webp" alt="valmec logo" /></a></div>
                    <div className="swiper-slide"><a href="https://affinity.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./affinity.webp" alt="affinity logo" /></a></div>
                    <div className="swiper-slide"><a href="https://www.latynconexiones.com.ar/" target="_blank" rel="noopener noreferrer"><img src="./valforte.webp" alt="valforte logo" /></a></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-scrollbar"></div>
            </div>
        </>
    );
};

export default Swiper;
