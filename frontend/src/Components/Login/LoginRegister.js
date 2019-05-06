import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.scss";
import Icon from "./../common/Icon";
import apis from "../../utils/Constants";
import request from "./../services/api";
import ReactLoading from "react-loading";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      isLoading: false
    };
  }

  componentWillMount() {
    localStorage.clear();
  }

  loading = () => (
    <ReactLoading
      type={"spinningBubbles"}
      style={{
        margin: "30px auto 0px auto",
        fill: "#7e64eb",
        height: 40,
        width: 40
      }}
    />
  );

  handleRegisterButton = () => {
    this.props.history.push("/registerStepOne");
  };

  handleSignIn = () => {
    this.setState({ errorMessage: "" });

    const { username, password } = this.state;

    if (this.validateInputSignIn(username, password).length > 0) {
      return;
    }
    this.setState({
      isLoading: true
    });
    const body = {
      username,
      password
    };
    request
      .post(apis.logIn, body)
      .then(res => {
        this.setState({ isLoading: false });
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.id);
        this.props.history.push("/victimProfile");
      })
      .catch(error => {
        this.setState({ isLoading: false });
        switch (error.response.status) {
          case 404:
            this.setState({ errorMessage: "Username não encontrado." });
            break;
          case 401:
            this.setState({ errorMessage: "Email ou senha, inválidos." });
            break;
          default:
            this.setState({
              errorMessage: "Não foi possível realizar o seu login."
            });
            break;
        }
      });
  };

  // EXEMPLO PRA CHAMADAS QUE PRECISAM DO TOKEN NO HEADER!!!!
  metodoExemplo = () => {
    const body = {
      info: [
        {
          description: "valor",
          help: "advogado",
          accepted: 1
        }
      ]
    };

    const headers = { "x-access-token": localStorage.getItem("token") };

    const caseNumber = 21;
    request
      .post(`apis.case${caseNumber}`, body, headers)
      .then(res => {
        // sucesso
      })
      .catch(error => {
        // em caso de qlqr error.
        // error.response.status -> obtem o codigo do erro
        // error.response -> tens acesso ao objeto de retorno do erro que vem do servidor.
      });
  };
  // EXEMPLO PRA CHAMADAS QUE PRECISAM DO TOKEN NO HEADER!!!!

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
    return message;
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
          {this.state.isLoading ? (
            <div>{this.loading()}</div>
          ) : (
            <button
              className="btn-purple color-white btn-login"
              onClick={() => this.handleSignIn()}
            >
              Iniciar Sessão
            </button>
          )}
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
