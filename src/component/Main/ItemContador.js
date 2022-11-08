import React, { useState, useEffect } from 'react';

const ItemContador = ({stock, initial=1, onAdd}) => {
    const [count, setCount] = useState(initial);
  

    const sumar = () => {
        count < stock && setCount(count + 1);

    };

    const restar = () => {
        count > 1 && setCount(count - 1);
       
    };

    
    const add = () => { 
        onAdd(count);
    };

    useEffect(() => {
        setCount(initial);
    }, [initial]);

    return (
        <div className="container-count">
            <div className="count-btn">
                <button onClick={restar}>
                    -
                </button>
                <p>{count}</p>
                <button disabled={count === stock} onClick={sumar}>
                    +
                </button>
            </div>
            <button onClick={add} className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemContador;

