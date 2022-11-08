import { useState,  createContext} from 'react';

export const Contexto = createContext ()

const Proveedor = ( {children} ) => {
   
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        const producto = {...item, cantidad};
        if (isInCart(producto.id)) {
            addItem(producto);
        }
        else {
             setCart([...cart, producto]);
        }
    };

    const isInCart = (id) => cart.some ((prod) => prod.id === id);

    const addItem = (prodAgregado) => {
        const carritoActualizado = cart.map((prodDelCart) => {
            if(prodDelCart.id === prodAgregado.id){
                const prodActualizado = {
                    ...prodDelCart,
                    cantidad: prodAgregado.cantidad
                };
                return prodActualizado;
            } else {
                return prodDelCart;
            }
        });
        setCart(carritoActualizado);
    };

    const removeItem = (id) => {
        const prodFiltrados = cart.filter ((prod)=> prod.id !== id)
        setCart(prodFiltrados);
    }

    const clear = () => setCart([]);
    
    const totalUnidades = () => {
        let accUnidades = 0 ;
        const copia = [...cart];
        copia.forEach((prod) => {
            accUnidades = accUnidades + prod.cantidad;
        });
        return accUnidades
    };

    const precioTotal = () => {
        let accPrecio = 0;
        const copia = [...cart];
        copia.forEach ((prod) => {
            accPrecio = accPrecio + (prod.price * prod.cantidad);
        });

        return accPrecio
    };

    const getProductQuantity = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };


    return(
        <div>
            <Contexto.Provider value={ {cart, agregarAlCarrito, clear, removeItem, totalUnidades, precioTotal, getProductQuantity} }>
                { children }
            </Contexto.Provider>
        </div>
    );
};
 
export default Proveedor;