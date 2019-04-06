import React, { Component } from 'react';
import './Register.scss';

export class AccountSecStep extends Component {
  render() {
    return (
      <div className="external--container">
      <h1 className="logo">Quebra <span className="color-purple">o Silêncio</span></h1>
 <div class="main--section">
      <h1 className="title">Crie a sua Conta</h1>
      <p className="steps">Passo 2 de 3</p>
      <p className="text">Tipo de conta - Escolha Encontra-se numa situação… e procura aconselhamento psicológico ou … Quer ajudar….</p>
        <div class="input--group">
             <input type="text" name="name" className="fill--input spacer" placeholder="Name"/>    
            <input type="text" name="username" className="fill--input" placeholder="Username"/>
            <input type="password" name="password" className="fill--input" placeholder="Password"/>
            <input type="text" name="password--confirm" className="fill--input" placeholder="Confirmar Password"/>
            <input type="text" name="email" className="fill--input" placeholder="E-mail"/>
            <input type="text" name="phone" className="fill--input" placeholder="Contacto Telefónico (Opcional)"/>
            <input type="text" name="localidade" className="fill--input" placeholder="Localidade"/>
            <input type="text" name="image" id="image" className="file--input" placeholder="Upload - Foto de Perfil (Opcional)"/>
            <div><a href="" className="next--step">Passo seguinte</a></div>
            <div><a href="" className="back--step">Voltar Atrás</a></div>
        </div>
   </div>
 </div>
    )
  }
}

export default AccountSecStep
