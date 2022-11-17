import React from 'react'
import home from "./Home.css"
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";
import Carrusel from '../carousel/Carousel';

function Home() {
  return (
    <>
    <div className='container'>
        <div className='title'>
        <h1>Asimov Library</h1>
        </div>
        <div className='description'>
            <h2 className='descriptionText'>Libreria Asimov le brinda un catalogo de e-books a su disposicion para que disfrute.</h2>
        </div>
        <Footer></Footer>
        </div>
        <div className='Carrusel'>
        <Carrusel></Carrusel>
        </div>
    <div className='eslogan'><Link to="/productos">Obtén tu libro favorito aquí.</Link></div>
    </>
  )
}

export default Home