// import Carrito from '../Carrito.png'  Ejemplo para hacerlo con imagen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const CartWidget = () => {
    return(
        // <div> Ejemplo de como hacerlo con una imagen png
        //  <img src={Carrito} class="carrito" alt='Carrito' href=""></img>
        // </div>
        <div>
            <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
        </div>
    );
}

export default CartWidget;
