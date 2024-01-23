import './Navbar.css';

const Navbar = () => {

    return (
        <>
            <nav className='navbar'>
                <ul className='items'>
                    <li>
                        <a href="/"><img className='logo' src="./falsoLogo.png" alt="Logo" /></a>
                    </li>
                    <li>
                        <button className='navButton'><a href='/'>Inicio</a></button>
                    </li>
                    <li>
                        <button className='navButton'><a href='#productos'>Productos</a></button>
                    </li>
                    <li>
                        <button className='navButton'><a href='#contacto'>Contacto</a></button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;