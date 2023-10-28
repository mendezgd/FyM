import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                <div className="background">
                    <button className='hamburger' onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <ul className='items'>
                        <li>
                            <button className='navButton'><a href='#'>Inicio</a></button>
                        </li>
                        <li>
                            <button className='navButton'><a href='#'>Productos</a></button>
                        </li>
                        <li>
                            <button className='navButton'><a href='#'>Contacto</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;