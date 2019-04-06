import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { get } from "http";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }

  handleRegisterButton = () => {
    this.props.history.push("/registerStepOne");
  };

  handleSignIn = () => {
    this.setState({ errorMessage: "" });
    const { username, password } = this.state;

    if (!this.validateInputSignIn(username, password)) {
      return;
    }

    //Aqui chama o backend
  };

  validateInputSignIn = (username, password) => {
    let message = "";

    if (!username && !password) {
      message = "Preencha o username e password.";
    } else if (!username) {
      message = "Preencha o username.";
    } else if (!password) {
      message = "Preencha o password.";
    }

    this.setState({ errorMessage: message });
  };

  render() {
    return (
      <div className="container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="start--section">
          <h1 className="title">Inicie a sua Sessão</h1>
          <div className="input--username">
          <FontAwesomeIcon icon="user" style={{ color: '#C5BBEF' }} />
          <input
            type="text"
            placeholder="Utilizador"
            onChange={event => this.setState({ username: event.target.value })}
          />
          </div>
          <div className="input--password">
          <FontAwesomeIcon icon="lock" style={{ color: '#C5BBEF' }} />
          <input
            type="password"
            placeholder="Palavra-passe"
            onChange={event => this.setState({ password: event.target.value })}
          />
          </div>
          {this.state.errorMessage && (
            <div className="alert alert-danger">
              <strong>Oops!</strong> {this.state.errorMessage}
            </div>
          )}
          <button
            className="btn-purple color-white"
            onClick={() => this.handleSignIn()}
          >
            <a className="btn-style">Iniciar Sessão</a>
          </button>
          <h3>
            <Link className="reset--password" to={"forgotPassword"}>
              Esqueceu-se da palavra-passe?
            </Link>
            <hr />
          </h3>
        </div>

        <div className="start--registration">
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
