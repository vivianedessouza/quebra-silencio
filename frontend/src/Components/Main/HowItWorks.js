import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Img from "../../images/img.png";

export class HowWorks extends Component {
  render() {
    return (
      <section id="howitwork" className="grid">
        <article className="color-white purple-gradient">
          <div className="shatter padding">
            <h3 className="purple-line">Como Quebrar o Silêncio...</h3>
            <p>
              Quebra <span className="color-purple">o Silêncio</span> é uma rede
              exclusiva para pessoas que sofrem violência doméstica. A
              plataforma visa conectar vítimas que precisam de ajuda, com
              profissionais que desejam ajudar de forma voluntária. Tudo
              funciona de uma forma simples, através de um chat. Caso necessite
              de ajuda, ou queira ajudar,
              <a href="#" className="color-purple">
                registe-se aqui.
              </a>
            </p>
            <div className="flex btn-purple">
              <Link to={'loginRegister'}>Registe-se Aqui</Link>
            </div>
          </div>
        </article>

        <figure>
          <img src={Img} />
        </figure>
      </section>
    );
  }
}

export default withRouter(HowWorks);
