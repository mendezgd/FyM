import React, { useEffect, useState, useRef } from 'react';
import './AnimateOnScroll.css';
import Card from './Card';

const AnimateOnScroll = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const elementRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setIsAnimated(true);
            } else {
                setIsAnimated(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={elementRef} className={`animate-me ${isAnimated ? 'animate' : ''}`}>
            <Card />
        </div>
    );
};

export default AnimateOnScroll;
