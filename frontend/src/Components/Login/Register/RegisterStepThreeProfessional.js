import React, { Component } from "react";
import Icon from "./../../common/Icon";
import Dropzone from "react-dropzone";
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
            <Link to="/professionalProfile" className="next--step">
              Enviar
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
