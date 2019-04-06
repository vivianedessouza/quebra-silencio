import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Register.scss";

class RegisterStepThreeVictim extends Component {
  handleProfessionalButton = () => {
    this.props.history.push("/uploadDoc");
  };

  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section position-center">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 3 de 3</p>
          <p className="text">Preencher dados - Ajuda</p>
          <div>
            <div
              className="btn-professional"
              onClick={() => this.handleProfessionalButton()}
            >
              <p>Psicólogo(a)</p>
            </div>
            <div
              className="btn-professional"
              onClick={() => this.handleProfessionalButton()}
            >
              <p>Advogado(a)</p>
            </div>
          </div>
          <textarea className="situation--description">
            Descreva a sua situação… Esta informação estará visível apenas para
            profissionais que a possam ajudar
          </textarea>
          <input
            type="text"
            name="state"
            className="state--input"
            placeholder="Estado Civil"
          />
          <div>
            <Link to={"/chat"} className="next--step">
              Passo seguinte
            </Link>
          </div>
          <div>
            <Link to={"/registerStepTwo"} className="back--step">
              Voltar Atrás
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepThreeVictim);
