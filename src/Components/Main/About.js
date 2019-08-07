import React, { Component } from "react";
import Joana from "../../images/joana.jpg";
import Miguel from "../../images/miguel.jpg";
import Viviane from "../../images/viviane.jpg";
import Git from "../../images/github-logo.svg";
import In from "../../images/linkedin-logo-button.svg";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



export class About extends Component {
  render() {
    
    return (
      
      <section id="about" className="color-white grid">
          <article className="co-founder grid padding">
          <Fade left duration={5000}>
          <figure className="filter">
            <img src={Miguel} />
            <div className="flex co-founder-info">
              <h2>Miguel Chávez</h2>
              <p>Cofundador, Front-End Developer</p>
              <div className="flex">
                <a href="https://github.com/miguelgchavez">
                  <img className="icons" src={Git} />
                </a>
                <a href="https://www.linkedin.com/in/miguelgch%C3%A1vez/">
                  <img className="icons" src={In} />
                </a>
              </div>
            </div>
          </figure>
          </Fade>

          <Fade left duration={4000}>
          <figure className="filter">
            <img src={Viviane} />
            <div className="flex co-founder-info">
              <h2>Viviane Souza</h2>
              <p>Cofundador, Front-End Developer</p>
              <div className="flex">
                <a href="https://github.com/vivianedessouza">
                  <img className="icons" src={Git} />
                </a>
                <a href="https://www.linkedin.com/in/vivianedessouza/">
                  <img className="icons" src={In} />
                </a>
              </div>
            </div>
          </figure>
          </Fade>

          <Fade left duration={3000}>
          <figure className="filter">
            <img src={Joana} />
            <div className="flex co-founder-info">
              <h2>Joana Rijo</h2>
              <p>Cofundador, Back-End Developer</p>
              <div className="flex">
                <a href="https://github.com/joanarijo">
                  <img className="icons" src={Git} />
                </a>
                <a href="https://www.linkedin.com/in/joana-rijo-459a9542/">
                  <img className="icons" src={In} />
                </a>
              </div>
            </div>
          </figure>
          </Fade>
        </article>

        <article className="about purple-gradient padding">
          <Zoom top duration={2000}>
            <h3 className="purple-line">Quem Somos</h3>
            </Zoom>
            
          <Fade bottom duration={3000}>
          
          <p>
            Conheça a equipa que deu origem à Plataforma Quebra o Silêncio, para
            melhorar a comunicação...
          </p>
          </Fade>
        </article>
      </section>
    );
  }
}

export default About;
