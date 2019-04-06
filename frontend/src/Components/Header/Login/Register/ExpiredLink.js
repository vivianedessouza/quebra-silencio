import React, { Component } from 'react'
import './Register.scss';

export class ExpiredLink extends Component {
  render() {
    return (
    <div className="external--container">
             <h1 className="logo">Quebra <span className="color-purple">o Silêncio</span></h1>
       <div className="main--section">
            <h1 className="title">Link Expirado</h1>
            <p className="text">Infelizmente, o tempo de reposição expirou... Por favor, peça novamente uma reposição da sua palavra-passe.</p>
           <input type="text" name="email" className="input--email" placeholder="E-mail"/>
        <div>
           <button className="btn-purple btn-register">Enviar</button>
        </div>
       </div>
     </div>
    )
  }
}

export default ExpiredLink
