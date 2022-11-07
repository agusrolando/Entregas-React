import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Header/NavBar';
import ItemListContainer from './component/Main/ItemListContainer';
import ItemDetailContainer from './component/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './component/Cart/Cart';
import Form from './component/Form/Form';
import Proveedor from './CartContext/EjemploContext';


function App() {

  return (
    <Proveedor>

      <BrowserRouter>
        
        <Navbar/>
  
        <Routes>
  
          <Route path="/" element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/checkout" element={<Form />} />
        
        </Routes>  
        <Footer/>
      </BrowserRouter>
      
    </Proveedor>
  )
}

export default App