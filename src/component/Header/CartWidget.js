// import Carrito from '../Carrito.png'  Ejemplo para hacerlo con imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Contexto } from '../../CartContext/EjemploContext';
import { useContext } from 'react';


const CartWidget = () => {
    
    const { totalUnidades } = useContext(Contexto);
    const total = totalUnidades ();
    return(
        // <div> Ejemplo de como hacerlo con una imagen png
        //  <img src={Carrito} class="carrito" alt='Carrito' href=""></img>
        // </div>
        <div>
            <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
            <spam> { total === 0 ? `` : total } </spam>
        </div>
    );
}

export default CartWidget;
