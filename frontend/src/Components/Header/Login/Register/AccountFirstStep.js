import React, { Component } from 'react';
import './Register.scss';


export class AccountFirstStep extends Component {
  render() {
    return (
    <div className="external--container">
        <h1 className="logo">Quebra <span className="color-purple">o Silêncio</span></h1>
   <div class="main--section">
        <h1 className="title">Crie a sua Conta</h1>
        <p className="steps">Passo 1 de 3</p>
        <p className="text">Tipo de conta - Escolha Encontra-se numa situação… e procura aconselhamento psicológico ou … Quer ajudar….</p>
       <button className="btn-users">Vítima</button>
       <button className="btn-users">Psicólogo(a)</button>
       <button className="btn-users">Advogado(a)</button>
       <div><a href="" className="next--step">Passo seguinte</a></div>
       
   </div>
 </div>
    )
  }
}

export default AccountFirstStep
