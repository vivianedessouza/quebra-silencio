import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
//import apis from "../../utils/Constants";

const SmoothScroll = () => (
  <nav>
    <h1 className="color-white">
      Quebra <span className="color-purple">o Silêncio</span>
    </h1>

    <ul className="color-white">
      <li>
        <AnchorLink href="#home">Home</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#howitwork">Como Funciona</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#about">Quem Somos</AnchorLink>
      </li>
      <li>
        <AnchorLink href="#contacts">Contactos</AnchorLink>
      </li>
      <li>
        <Link to={"/loginRegister"}>Login/Registo</Link>
      </li>
    </ul>
  </nav>
);
class NavBar extends Component {
  render() {
    return <SmoothScroll />;
  }
}
export default withRouter(NavBar);
