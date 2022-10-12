import React, { Component, useState, useEffect } from 'react';

// Componente de presentacion
const Brand = (props) => {
    const [title, setTitel] = useState('Fragatos por default');


    return (
        <h1>{props.children || title}</h1>
    )
}

export default Brand;