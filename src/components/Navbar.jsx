import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <ul className='items'>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                    <button>Test</button>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
