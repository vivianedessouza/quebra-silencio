import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.scss";

class RegisterStepOne extends Component {
  handleUsersButton = isProfessional => {
    this.props.history.push({
      pathname: "/registerStepTwo",
      state: { isProfessional: isProfessional }
    });
  };

  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section position-center">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 1 de 3</p>
          <p className="text">
            Tipo de conta - Escolha Encontra-se numa situação… e procura
            aconselhamento psicológico ou … Quer ajudar….
          </p>
          <div
            className="btn-users"
            onClick={() => this.handleUsersButton(false)}
          >
            <p>Vítima</p>
            <FontAwesomeIcon icon="check" />
          </div>
          <div
            className="btn-users"
            onClick={() => this.handleUsersButton(true)}
          >
            <p>Psicólogo(a)</p>
            <FontAwesomeIcon icon="check" />
          </div>
          <div
            className="btn-users"
            onClick={() => this.handleUsersButton(true)}
          >
            <p>Advogado(a)</p>
            <FontAwesomeIcon icon="check" />
          </div>
          <div>
            <Link to={"registerStepTwo"} className="next--step">
              Passo seguinte
              <hr />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepOne);
