import React from "react";
import "./Header.css";

const Header = () => {

    return (
        <>
            <div className="background-image-container">
                <div className="background-image"></div>
                <div className="overlay"></div>
                <div className="text-container">
                    <h1 className="titulo">FyM Sanitarios</h1>
                </div>
            </div>
        </>
    );
}

export default Header;
