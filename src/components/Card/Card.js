import React from 'react'
import { useState, useReducer } from 'react'
import { shoppingcartInitialState, shoppingreducer } from '../reducers/ShoppingReducers'
import './Card.css'
import { TYPES } from '../actions/ShoppingActions'
import { data } from '../assets/db/data'
import { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { cartContext } from '../context/cartContext'
import Footer from '../Footer/Footer'
import { Routes, Route, Link } from 'react-router-dom';

function CardProduct() {


  const [productos, setproductos] = useState([])

  useEffect(() => {
    setproductos(data);
  }, []);

  return (
    <>
      <cartContext.Consumer>
        {context => (
          <React.Fragment>
            <div className='conteiner'>
              {context.products.map((p) => {
                return (

                  <Card style={{ width: '18rem' }} className="carta">
                    <Card.Img variant="top" src={p.image} className="imgLibro">
                    </Card.Img>

                    <Card.Body>
                      <Card.Title>{p.name}
                      <p>Price: {p.price}</p></Card.Title>
                      <Button onClick={() => context.addProductToCart(p)} variant="primary">AÑADIR AL CARRITO</Button>
                      <Link to={"/productos/"+p.name}>
                      <Button>Informacion</Button>
                      </Link>
                    </Card.Body>
                  </Card>


                )
              })
              }
            </div>
          </React.Fragment>
        )}
      </cartContext.Consumer>
      <Footer></Footer>
    </>
  )
}

export default CardProduct