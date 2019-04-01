import React, { Component } from 'react';
import Form from './Form';
import SocialMedia from '../Header/SocialMedia';
import Img from '../../images/map.png';
import Iframe from "react-iframe";

export class Contacts extends Component { 
  render() {
    return (
      <section id="contacts" className="grid purple-gradient color-white">
        <article className=" padding">
          <h3 className="purple-line">Contactos</h3>
          <Form />

          <div className="address">
            <p>Morada: </p>
            <p>Contactos Telefónico:</p>
            <p>Email:</p>
          </div>

          <SocialMedia />

        </article>

        <article className="filter map">
          <img src={Img} />
        </article>
        
      </section>
    );
  }
}

export default Contacts;
