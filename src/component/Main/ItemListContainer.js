import { useEffect, useState} from 'react';
import ItemList from './ItemList';
// import { products } from '../../Piletas/ProductosPileta';
import { useParams } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import { collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../Service/firebaseConfig';

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const [loading, setLoading] = useState(true);


    const { categoryName } = useParams();

    useEffect(() => {

        const collectionProd = collection(db, 'productos');
        const referencia = categoryName 
            ? query(collectionProd, where('category', '==', categoryName))
            : collectionProd

        // const q = query(collectionProd, where('category', '==', categoryName));

        getDocs (referencia)
        .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems (products);
        })
        .catch ((error) => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false);
        });
    return () => setLoading (true);

    }, [categoryName]);

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

    //console.log(items);

    return(
        <main>
        <div className='item-list-container'>
            <ItemList items={items}/>
        </div>
        </main>
    );
};

export default ItemListContainer


// const traerProductos = () => {
//     return new Promise((res, rej) => {
//         const prodFiltrados = products.filter(
//             (prod) => prod.category === categoryName
//         );
//         const prod = categoryName ? prodFiltrados : products;
//         setTimeout(() => {
//             res(prod);
//         }, 1000);
//     });
// };
// traerProductos()
//     .then((res) => {
//         setItems(res);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         setLoading(false);
//     });

//     return () => setLoading(true);