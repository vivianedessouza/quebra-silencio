import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1 className="color-white">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>

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
            <Link to={"/loginRegister"}>Login/Registo</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(NavBar);
