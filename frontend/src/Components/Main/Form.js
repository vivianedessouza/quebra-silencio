import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Deixe a sua mensagem...</label>
          <br />
          <div className="inputs">
            <input method="post" name="name" type="text" placeholder="Nome" />
            <input
              method="post"
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <textarea method="post" name="message" placeholder="Mensagem" />
          <button className="btn-purple color-white">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;
