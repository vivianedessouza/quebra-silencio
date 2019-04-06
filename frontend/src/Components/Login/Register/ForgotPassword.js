import React, { Component } from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ForgotPassword extends Component {
  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section position-center">
          <h1 className="title">"Reset" à Palavra-Passe</h1>
          <p className="text">
            Por favor, insira o e-mail associado à sua conta para receber um
            receber link de reposição de palavra-passe na sua inbox.
          </p>
          <span className="input--email">
          <FontAwesomeIcon icon="envelope" style={{ color: '#C5BBEF' }} />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
          />
          </span>
          <div>
            <button className="btn-purple btn-register">Enviar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
