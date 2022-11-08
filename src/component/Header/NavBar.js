import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../Service/firebaseConfig';

const Navbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const collectionCat = collection(db, 'categorias');
        getDocs(collectionCat)
            .then((res) => {
                const categorias = res.docs.map((cat) => {
                    return {
                        id: cat.id,
                        ...cat.data(),
                    };
                });
                setCategories(categorias);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <nav className="menu">
            <Link to="/">
                <h1>VH PISCINAS</h1>
            </Link>
            <ul>
                {categories.map((cat) => (
                        <NavLink key={cat.id} to={`/category/${cat.path}`}>
                            {cat.name}
                        </NavLink>
                    ))}
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;