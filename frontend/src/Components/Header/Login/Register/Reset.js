import React, { Component } from 'react'
import './Register.scss';

export class Reset extends Component {
  render() {
    return (
    <div className="external--container">
             <h1 className="logo">Quebra <span className="color-purple">o Silêncio</span></h1>
       <div class="reset--section">
            <h1 className="title">"Reset" à Palavra-Passe</h1>
            <p className="text">Por favor, insira o e-mail associado à sua conta para receber um receber link de reposição de palavra-passe na sua inbox.</p>
           <input type="text" name="email" className="input--email" placeholder="E-mail"/>
        <div>
           <button className="btn-purple btn-register">Enviar</button>
        </div>
       </div>
     </div>
    )
  }
}

export default Reset
