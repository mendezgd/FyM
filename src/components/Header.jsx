import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="background-image-container">
            <div className="background-image"></div>
            <div className="overlay"></div>
            <div className="text-container">
                <h1 className="bienvenidos">Bienvenidos a FyM Sanitarios</h1>
                <h2 className="barrita">-</h2>
                <p className="subintro">Nos enorgullece ser uno de los principales proveedores de productos sanitarios en nuestra región. Con años de experiencia en la industria, nos hemos ganado la confianza de nuestros clientes gracias a nuestra amplia gama de productos de alta calidad y a nuestro compromiso con el servicio al cliente excepcional.</p>
            </div>
        </div>
    );
}

export default Header;
