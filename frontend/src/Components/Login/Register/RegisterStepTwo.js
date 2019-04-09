import React, { Component } from "react";
import Icon from "./../../common/Icon";
import { withRouter, Link, Fragment} from "react-router-dom";
import Validate from "react-validate-form";
import "./Register.scss";

class RegisterStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password:"",
      passwordConfirm: "",
      email: "",
      phone:"",

    };
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
              <Icon icon="user" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="name"
                placeholder="Name"
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="user" className="input-icon" />
              <Validate>
              {({ validate, errorMessages }) => (
                
              <input onChange={validate} required
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
              />             
              )}
              </Validate>
            </span>
            <span className="fill--input input-left">
              <Icon icon="lock" className="input-icon" />
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Palavra-passe"
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="lock" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="passwordConfirm"
                placeholder="Confirmar Palavra-passe"
              />
            </span>
            <span className="fill--input input-left">
              <Icon icon="envelope" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="email"
                placeholder="E-mail"
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="phone" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="phone"
                placeholder="Contacto Telefónico (Opcional)"
              />
            </span>
            <select include="form-input-select()" required className="fill--input input-left form-input-select">
              <Icon icon="map" className="input-icon" />
              <option value="" hidden>Localidade - Distrito</option>
              <option value="Lisboa">Lisboa</option>
              <option value="Porto">Porto</option>
              <option value="Aveiro">Aveiro</option>
            </select>
            <span className="file--input input-right">
              <Icon
                icon="upload"
                className="input-icon input-icon-formatting"
              />
              <input
                className="input-text text-formatting"
                type="text"
                name="image"
                id="image"
                placeholder="Upload - Foto de Perfil (Opcional)"
              />
            </span>
            <div>
              {this.props.location.state.isProfessional ? (
                <Link
                  to={{
                    pathname: "/registerStepThreeProfessional",
                    state: {
                      isProfessional: this.props.location.state.isProfessional
                    }
                  }}
                  className="next--step"
                >
                  Passo seguinte
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: "/registerStepThreeVictim",
                    state: {
                      isProfessional: this.props.location.state.isProfessional
                    }
                  }}
                  className="next--step"
                >
                  Passo seguinte
                  <hr />
                </Link>
              )}
            </div>
            <div>
              <Link to={"/registerStepOne"} className="back--step">
                Voltar Atrás
                <hr />
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepTwo);
