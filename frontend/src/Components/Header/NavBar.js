import React, { Component } from 'react';
import './Header.scss';

export class NavBar extends Component {
  render() {
    return (
      <nav>
          
        <h1 className="color-white">Quebra <span className="color-purple">o Silêncio</span></h1>

        <ul className="color-white">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#howitwork">Como Funciona</a>
            </li>
            <li>
                <a href="#about">Quem Somos</a>
            </li>
            <li>
                <a href="#contacts">Contactos</a>
            </li>
            <li>
                <a href="#register">Registro</a> / <a href="#login">Login</a>
            </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
