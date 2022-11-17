import React from 'react'
import './Navegation.css'
import { Link } from "react-router-dom";
import img from '../assets/imgs/descarga.png'
import imge from '../assets/imgs/book.png'


function Nategation() {
  return (
    <>
      <nav className='nav-conteiner'>

        <div className='object1'>
        <img src={imge} alt={"logo1"} className="cart-imge"/>
        <h1 className='nav-logo'>Asimov Library</h1>
        </div>

        <ul className='nav-items'>
          <li className='nav-item'><Link to="/"><h4>Home</h4></Link></li>
          <li className='nav-item'><Link to="/productos"><h4>Productos</h4></Link></li>
          <li className='nav-item'><Link to="/contacto"><h4>Contacto</h4></Link></li>
          <li> <Link to="/shoppingCard">
            <img src={img} alt={"logo"} className="cart-img" />
          </Link>
        </li>
        </ul>

      </nav>
    </>
  )
}

export default Nategation