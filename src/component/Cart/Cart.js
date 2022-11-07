import { useContext } from "react";
import { Contexto } from "../../CartContext/EjemploContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';





const Cart = () => {

    const {cart, clear, removeItem, precioTotal} = useContext(Contexto);
    const total = precioTotal();

    if (cart.length === 0) {
        return (
            <div className="carritoVacio">
                <h1>Aún no hay nada en el carrito</h1>
                <p>   Da click para ir a ver  nuestros productos volver a nuestra pagina principal</p>
                <Link to="/" className="botonDetalle">Pagina principal</Link>
            </div>
        );
    
    }

    return (
        <div className="container-detail" >
            {cart.map((prod) => (
                <div key={prod.id}>
                    
                    <img src="{prod.img}" alt="" />
                    <div> 
                        <h2>{prod.title}</h2>
                        <h3>$ {prod.price}</h3>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Subtotal: ${prod.price * prod.cantidad}</h3>
                    </div>
                    
                    <FontAwesomeIcon icon={faTrash} color="#ef8354" onClick={()=> removeItem (prod.id)}/>
                    
                </div>
            ))
            }
            <h2>Total: ${total}</h2>
            <button className="add-btn" onClick={clear}>Eliminar el carrito</button>
            <Link className="add-btn" to="/checkout">
                Checkout
            </Link>

        </div>
    );
};

export default Cart;