import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { withRouter, Link } from "react-router-dom";
import "./Register.scss";
import request from "./../../services/api";
import apis from "../../../utils/Constants";

class RegisterStepThreeProfessional extends Component {
  handleFormSubmit = () => {
    const profile = JSON.parse(localStorage.getItem("profileObj"));
    profile.role_id =
      this.props.location.state.professionalType === "lawyer" ? "2" : "3";

    request
      .post(apis.register, profile)
      .then(res => {
        this.doLogin(res.data.description, profile.username, profile.password);
      })
      .catch(e => {
        alert("Já há uma conta com este username. Por favor, escolha outro.");
      });
  };

  doLogin = (message, username, password) => {
    const body = {
      username,
      password
    };

    request
      .post(apis.logIn, body)
      .then(res => {
        alert(message);
        localStorage.removeItem("profileObj");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.id);
        this.props.history.push("/professionalProfile");
      })
      .catch(error => {
        console.log("Entrou aqui no catch", error);

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

          <span className="file--input input-document flex">
            <Dropzone
              onDrop={acceptedFiles => {
                // handle the file
                console.log(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input className="input-dropzone" {...getInputProps()} />
                    <p>Upload - Documentos</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </span>
          <p className="information">
            Informação de que a conta ficará pendente até os documentação ficar
            aprovada
          </p>
          <div>
            <button
              className="next--step"
              onClick={() => this.handleFormSubmit()}
            >
              Enviar
            </button>
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
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepThreeProfessional);
