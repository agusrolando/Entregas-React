import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
// import { products } from '../../Piletas/ProductosPileta';
import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../Service/firebaseConfig';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    
    const { id } = useParams ();

    useEffect(() => {
        const collectionProd = collection (db, 'productos');
        const ref = doc(collectionProd, id);

        getDoc(ref)
        .then((res) => {
            setItem ({
                id: res.id,
                ...res.data(),
            });
        })
        .catch ((error) =>{
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
   
        return () => setLoading (true);

    }, [id]);

    console.log(item);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <BeatLoader style={{ marginTop: '100px' }} color="black" /> 
            </div>
        );
    }


    return (
        <div className="item-list-container">
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;

//método de array que devuelve un {}

// filter -> []
// find -> {}

//products.find((prod)=> prod.id === 1)


// const traerProducto = () => {
//     return new Promise((res, rej) => {
//         const producto = products.find((prod) => prod.id === Number(id));

//         setTimeout(() => {
//             res(producto);
//         }, 1000);
//     });
// };
// traerProducto()
//     .then((res) => {
//         setItem(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         setLoading(false);
//     });

//     return () => setLoading(true);