import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="text-container">
                <h1 className="bienvenidos">Bienvenidos a <span className="sanitarios">FyM</span> Sanitarios</h1>
                <h2 className="barrita">-</h2>
                <p className="subintro">Nos enorgullece ser uno de los principales proveedores de productos sanitarios en nuestra región. Con años de experiencia en la industria, nos hemos ganado la confianza de nuestros clientes gracias a nuestra amplia gama de productos de alta calidad y a nuestro excepcional compromiso con el servicio al cliente.</p>
            </div>
        </>
    );
}

export default Hero;