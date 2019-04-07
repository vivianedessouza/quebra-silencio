import React, { Component } from "react";
import Icon from "./../../common/Icon";
import { withRouter, Link } from "react-router-dom";
import "./Register.scss";

class RegisterStepThreeProfessional extends Component {
  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section position-center">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 3 de 3</p>
          <p className="text">Preencher dados - Documentos</p>
          <span className="file--input input-document">
            <p>Upload - Documentos</p>
          </span>
          <p className="information">
            Informação de que a conta ficará pendente até os documentação ficar
            aprovada
          </p>
          <div>
            <Link to="" className="next--step">
              Passo seguinte
              <hr />
            </Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/registerStepTwo",
                state: {
                  isProfessional: this.props.location.state.isProfessional
                }
              }}
              className="back--step"
            >
              Voltar Atrás
              <hr />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepThreeProfessional);
