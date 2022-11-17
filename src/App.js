import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import CardProduct from './components/Card/Card';
import GlobalState from './components/context/cartContext';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Nategation from './components/Navegation/Nategation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Libro from './components/libro/Libro';

function App() {
  return (
    <GlobalState>
    <div className="App">
    <Nategation />
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Productos" element={<CardProduct />} />
    <Route path="/shoppingCard" element={<ShoppingCart />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="/Productos/:name" element={<Libro/>} />
    </Routes>
    </div>
    </GlobalState>

  );
}
 
export default App;
