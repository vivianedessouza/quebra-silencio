import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";

class LoginRegister extends Component {
  handleRegisterButton = () => {
    this.props.history.push("/registerStepOne");
  };

  render() {
    return (
      <div className="container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div class="start--section">
          <h1 className="title">Inicie a sua Sessão</h1>
          <i class="fas fa-user-alt" />
          <input
            type="text"
            name="username"
            className="input--username"
            placeholder="Username"
          />
          <input
            type="text"
            name="password"
            className="input--password"
            placeholder="Password"
          />
          <button className="btn-purple color-white">
            <a className="btn-style">Iniciar Sessão</a>
          </button>
          <h3>
            <Link className="reset--password" to={"forgotPassword"}>
              Esqueceu-se da palavra-passe?
            </Link>
            <hr />
          </h3>
        </div>

        <div class="start--registration">
          <h1 className="title">Ainda não tem conta?</h1>
          <p className="text-purple">Registe-se e peça ajuda ou ajude...</p>
          <button
            className="btn-purple btn-register"
            onClick={() => this.handleRegisterButton()}
          >
            Registar
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginRegister);
