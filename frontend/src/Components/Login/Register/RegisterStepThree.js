import React, { Component } from "react";
import "./Register.scss";

class RegisterStepThree extends Component {
  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div class="main--section">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 3 de 3</p>
          <p className="text">Preencher dados - Ajuda</p>
          <div>
            <button className="btn-professional">Psicólogo(a)</button>
            <button className="btn-professional">Advogado(a)</button>
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

export default RegisterStepThree;
