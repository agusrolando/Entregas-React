import ItemContador from './ItemContador';
import { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import {Contexto} from '../../CartContext/EjemploContext';



const ItemDetail = ({ item }) => {


    const [unidades, setUnidades] = useState (0)

    const {agregarAlCarrito, getProductQuantity} = useContext(Contexto)

    const onAdd = (numero) => {
        setUnidades(numero);
        agregarAlCarrito (item, numero);
    };

    const quantity = getProductQuantity(item.id)

    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    rem, consequatur accusamus dicta incidunt sapiente cum ipsa,
                    ducimus
                </p>

                {
                    <h2 style={{color: 'black'}}> 
                        {unidades === 0 ? "" : `Se agrego el producto al carrito`}
                    </h2>

                }

                <ItemContador onAdd={onAdd} stock={item.stock} initial={quantity} />
                {
                    unidades === 0 ? ( <p></p>
                    ) : (
                    <Link to="/cart" className='add-btn'> Ir al carrito</Link>
                    )
                  
                }
            </div>
        </div>
    );
};

export default ItemDetail;

