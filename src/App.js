import './App.css';
import Footer from './component/Footer/Footer';
import Navbar from './component/Header/NavBar';
import ItemListContainer from './component/Main/ItemListContainer';
import Ejemplo from './component//Ejemplo/Ejemplo';
import ItemDetailContainer from './component/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './component/Cart/Cart';

function App() {

  return (
    <BrowserRouter>
      
      <Navbar/>

      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/Cart" element={<Cart/>} />
        
        
        {/* <Route path="/" element={<Ejemplo />} /> */}
      </Routes>  
      <Footer/>
    </BrowserRouter>
  )
}

export default App