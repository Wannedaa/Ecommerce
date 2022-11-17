import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { data } from '../assets/db/data'
import libro from './libro.css'

function Libro() {

    const [productos, setproductos] = useState([])

    useEffect(() => {
      setproductos(data);
    }, []);

    const name = useParams();

    var nombre;
    var imagen;
    var descripcion;

    {productos ? ( 
        productos.forEach((element) => {
    
          if (element.name == name.name) {
            nombre = element.name
            imagen = element.image
            descripcion = element.description
          }}
          )
          ) : (<div></div>)}



  return (
    <div>
        <div className='containerLibro1'>
            <div className='containerLibro'>
            <h1>{nombre}</h1>
            </div>
        </div>
        <div>
        <img src={imagen} className="libroImagen"></img>
        </div>
        <div className='containerLibro1'>
            <h3>{descripcion}</h3>
        </div>
    </div>
  )
}

export default Libro