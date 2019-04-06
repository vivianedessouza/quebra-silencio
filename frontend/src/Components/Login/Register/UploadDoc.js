import React, { Component } from "react";
import "./Register.scss";

class UploadDoc extends Component {
  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 3 de 3</p>
          <p className="text">Preencher dados - Documentos</p>
          <input
            type="text"
            name="image"
            id="image"
            className="state--input"
            placeholder="Upload - Foto de Perfil (Opcional)"
          />
          <p className="information">
            Informação de que a conta ficará pendente até os documentação ficar
            aprovada
          </p>
          <div>
            <a href="" className="next--step">
              Passo seguinte
            </a>
          </div>
          <div>
            <a href="" className="back--step">
              Voltar Atrás
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadDoc;
