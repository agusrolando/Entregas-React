import { useEffect, useState} from 'react';
import ItemList from './ItemList';
import { products } from '../../Piletas/ProductosPileta';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);

    const { categoryName } = useParams();

    useEffect(() => {
        const traerProductos = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter(
                    (prod) => prod.category === categoryName
                );
                const prod = categoryName ? prodFiltrados : products;
                setTimeout(() => {
                    res(prod);
                }, 500);
            });
        };
        traerProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [categoryName]);

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