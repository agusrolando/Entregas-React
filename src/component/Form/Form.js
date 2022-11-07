import { useEffect, useState, useContext} from "react";
import {Contexto} from '../../CartContext/EjemploContext';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Service/firebaseConfig";
import { Link } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [telefono, setTelefono] = useState ('');
    const [email, setEmail] = useState ('');
    const [email2, setEmail2] = useState ('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);

    const { cart, precioTotal, clear } = useContext(Contexto);

    const totalPrice = precioTotal();

    const handleSubmit = (e) =>{
        setLoading(true);
        e.preventDefault();
        const order = {
            buyer: { name, lastName },
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then((res) => {
            setOrderId(res.id);
            clear();
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => setLoading(false));
};



    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangeEmail2 = (e) => {
        setEmail2(e.target.value);
    };

    console.log(orderId);


    if (orderId) {
        return (
            <div className="comp">

            <h1>
                Gracias por tu compra, tu número de seguimiento es ${orderId}
            </h1>

            <p>   Da click para ir a ver mas de nuestros productos volver a nuestra pagina principal</p>
                
            <Link to="/" className="botonDetalle">Pagina principal</Link>

            </div>
        );
    }

    return(
        <div className="formulario">
        
            <form className="formul" onSubmit={handleSubmit} action="">
            <h1>Para completar tu compra ingresa tus dato</h1>

                <input className="input" type="text" name="nombre" value={name}
                placeholder="Nombre" onChange={handleChangeName}/>

                <input className="input" type="text" name="apellido" value={lastName} 
                placeholder="Apellido" onChange={handleChangeLastName}/>

                <input className="input" type="number" name="telefono" value={telefono} 
                placeholder="Telefono" onChange={handleChangeTelefono}/>

                <input className="input" type="email" name="email" value={email} 
                placeholder="Email" onChange={handleChangeEmail}/>

                <input className="input" type="email" name="email2" value={email2} 
                placeholder="Repetir Email" onChange={handleChangeEmail2}/>
                {
                email === email2
                ?(<button className="add-btn">{loading ? 'Enviando...' : 'Enviar'}</button>)
                :(<button className="add-btn-noHabilitado" disabled={email !== email2}>Enviar</button>)
                }
            </form>
        </div>
    );
};

export default Form;