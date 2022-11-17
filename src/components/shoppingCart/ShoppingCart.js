import React, { useReducer } from 'react'
import { shoppingcartInitialState, shoppingreducer } from '../reducers/ShoppingReducers'
import { useContext } from 'react'
import { cartContext } from '../context/cartContext';
import Footer from '../Footer/Footer';
import './shoppingcart.css'
import { Link } from "react-router-dom";

document.body.className = ("background")

function ShoppingCart() {
  
  const context = useContext(cartContext);
  return (
    <div className='all'>
      <div>
        <article className='box'>
        <div className='carritoTitleBox'>
        <h1 className='carritoTittle'>Carrito</h1>
        </div>
          <div className='objectContainer'>
            {context.cart.map((p) => {
              return (
                <div className='object'>
                  
                  <h3>{p.newItem.name}</h3>
                  <img className='imgCarrito' src={p.newItem.image}></img>
                  <div>
                  <h3>Price: {p.newItem.price}</h3>
                  <button onClick={() => context.removeProductFromCart(p.newItem.id)}>Eliminar</button></div>
                  </div>
                  )})
            }
            <Footer></Footer>
          </div>
          <div className='añadirText'><Link to="/productos"><h4>¿No hay libros en el carrito? Añade algunos Aqui!</h4></Link></div>
        </article>
      </div>
    </div>

  )
}

export default ShoppingCart