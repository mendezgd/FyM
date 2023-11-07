import React from "react";
import Carousel from "./Carousel";
import "./Header.css";

const Header = () => {
    const images = [
        '/fym1.jpeg',
        '/fym2.jpeg',
        '/fym3.jpeg',
    ];
    
    return (
        <div>
            <Carousel images={images} />
        </div>
    );
}

export default Header;
