import React from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="menu">
            <Link to="/">
                <h1>VH PISCINAS</h1>
            </Link>
            <ul>
                <NavLink to="/category/Piletas">Piletas</NavLink>
                <NavLink to="/category/Exterior">Exterior</NavLink>
                <NavLink to="/category/Jacuzzi">Jacuzzi</NavLink>
            </ul>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </nav>
    );
};

export default Navbar;