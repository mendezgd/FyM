
import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className='navbar'>
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
            </nav>
        </>
    );
}
export default Navbar;

