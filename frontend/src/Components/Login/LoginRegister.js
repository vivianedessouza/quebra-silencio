import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";
import Icon from "./../common/Icon";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }

  handleStartSessionButton = () => {
    this.props.history.push("/loggedHome");
  };
  handleRegisterButton = () => {
    this.props.history.push("/registerStepOne");
  };

  handleSignIn = () => {
    this.setState({ errorMessage: "" });
    const { username, password } = this.state;

    if (!this.validateInputSignIn(username, password)) {
      return;
    }

    //Aqui será necessário chamar o backend com a joana
  };

  validateInputSignIn = (username, password) => {
    let message = "";

    if (!username && !password) {
      message = "Preencha o username e palavra-passe.";
    } else if (!username) {
      message = "Preencha o username.";
    } else if (!password) {
      message = "Preencha o palavra-passe.";
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
          <div className="input-login-form">
            <h1 className="title">Inicie a sua Sessão</h1>
            <div className="input--username">
              <Icon icon="user" className="input-icon" />
              <input
                className="input-text"
                type="text"
                placeholder="Username"
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
            </div>
            <div className="input--password">
              <Icon icon="lock" className="input-icon" />
              <input
                className="input-text"
                type="password"
                placeholder="Palavra-passe"
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </div>

            {this.state.errorMessage && (
              <div className="alert alert-danger alert--position">
                <strong>Oops!</strong> {this.state.errorMessage}
              </div>
            )}
          </div>

          <button
            className="btn-purple color-white btn-login"
            onClick={() => this.handleSignIn()}
          >
            <a
              className="btn-style"
              onClick={() => this.handleStartSessionButton()}
            >
              Iniciar Sessão
            </a>
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
