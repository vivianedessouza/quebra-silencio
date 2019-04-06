import React, { Component } from 'react';
//import { Link} from 'react-router-dom';
import './Header.scss';

export class NavBar extends Component {

 
  
  render() {
    return (
      <nav>
          
        <h1 className="color-white">Quebra <span className="color-purple">o Silêncio</span></h1>

        <ul className="color-white">
            <li>
                <a href="./Home">Home</a>
            </li>
            <li>
                <a href="#HowItWorks">Como Funciona</a>
            </li>
            <li>
                <a href="#About">Quem Somos</a>
            </li>
            <li>
                <a href="#Contacts">Contactos</a>
            </li>
            <li>
                <a href="./LoginRegister">Login | Registro</a> 
            </li>
           
        </ul>
      </nav>
    )
  }
}

export default NavBar;
