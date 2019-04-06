import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, Link } from "react-router-dom";
import "./Register.scss";

class RegisterStepTwo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 2 de 3</p>
          <p className="text">
            Tipo de conta - Escolha Encontra-se numa situação… e procura
            aconselhamento psicológico ou … Quer ajudar….
          </p>
          <form className="input--group">
            <span className="fill--input spacer input-left">
              <FontAwesomeIcon icon="user" style={{ color: "#C5BBEF" }} />
              <input type="text" name="name" placeholder="Name" />
            </span>
            <span className="fill--input input-right">
              <FontAwesomeIcon icon="user" style={{ color: "#C5BBEF" }} />
              <input type="text" name="username" placeholder="Username" />
            </span>
            <span className="fill--input input-left">
              <FontAwesomeIcon icon="lock" style={{ color: "#C5BBEF" }} />
              <input
                type="password"
                name="password"
                placeholder="Palavra-passe"
              />
            </span>
            <span className="fill--input input-right">
              <FontAwesomeIcon icon="lock" style={{ color: "#C5BBEF" }} />
              <input
                type="text"
                name="password--confirm"
                placeholder="Confirmar Palavra-passe"
              />
            </span>
            <span className="fill--input input-left">
              <FontAwesomeIcon icon="envelope" style={{ color: "#C5BBEF" }} />
              <input type="text" name="email" placeholder="E-mail" />
            </span>
            <span className="fill--input input-right">
              <FontAwesomeIcon icon="phone" style={{ color: "#C5BBEF" }} />
              <input
                type="text"
                name="phone"
                placeholder="Contacto Telefónico (Opcional)"
              />
            </span>
            <span className="fill--input input-left">
              <FontAwesomeIcon icon="map" style={{ color: "#C5BBEF" }} />
              <input type="text" name="localidade" placeholder="Localidade" />
            </span>
            <span className="file--input input-right">
              <FontAwesomeIcon icon="upload" style={{ color: "#C5BBEF" }} />
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Upload - Foto de Perfil (Opcional)"
              />
            </span>
            <div>
              {this.props.location.state.isProfessional ? (
                <Link
                  to={"/registerStepThreeProfessional"}
                  className="next--step"
                >
                  Passo seguinte
                </Link>
              ) : (
                <Link to={"/registerStepThreeVictim"} className="next--step">
                  Passo seguinte
                </Link>
              )}
            </div>
            <div>
              <Link to={"/registerStepOne"} className="back--step">
                Voltar Atrás
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterStepTwo;
