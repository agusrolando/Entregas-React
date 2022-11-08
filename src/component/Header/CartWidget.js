import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Contexto } from '../../CartContext/EjemploContext';
import { useContext } from 'react';


const CartWidget = () => {
    
    const { totalUnidades } = useContext(Contexto);
    const total = totalUnidades ();
    return(
        <div>
            <FontAwesomeIcon icon={faCartShopping} className="carrito"/>
             { total === 0 ? `` : total }
        </div>
    );
}

export default CartWidget;
