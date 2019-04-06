
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
//import * as Yup from 'yup';
//import PropTypes from 'prop-types'; 
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class LoginRegister extends Component {

 

  handleLoginButton = () => {
    alert("viviane");
  }

  render() {
    return (
      <div className="container">
            <h1 className="logo">Quebra <span className="color-purple">o Silêncio</span></h1>
        <div class="start--section">
            <h1 className="title">Inicie a sua Sessão</h1>
            <i class="fas fa-user-alt"></i>
            <input type="text" name="username" className="input--username" placeholder="Username"/>
            <input type="text" name="password" className="input--password" placeholder="Password"/>
            <button className="btn-purple color-white"><a className="btn-style">Iniciar Sessão</a></button>
          <h3><a href="./Register/Reset" className="reset--password">Esqueceu-se da palavra-passe?</a><hr/></h3>
          
        </div>

        <div class="start--registration">
            <h1 className="title">Ainda não tem conta?</h1>
            <p className="text-purple">Registe-se e peça ajuda ou ajude...</p>
            <button className="btn-purple btn-register" onclick={()=> this.handleLoginButton} >Registar</button>
        </div>
      </div>
    )
  }
}


export default LoginRegister;
