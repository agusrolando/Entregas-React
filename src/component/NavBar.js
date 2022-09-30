import CartWidget from './CartWidget'
import '../App.css';
import Logo from '../Logo.png'
import Carrito from '../Carrito.png'

const NavBar = () => {
    return (
        <div>
            
            <ul class="menu">
            
			<li><a href="#">Inicio</a></li>
			<li><a href="#">Productos</a></li>
			<li><a href="#">Servicios</a></li>
			<li><a href="#">Acerca De</a></li>
			<li><a href="#">Contacto</a></li>
            
            <CartWidget />
           

            <img src={Logo} class="logo" alt='Logo' href=""></img>

		    </ul>

            
        </div>
    )

}

export default NavBar;