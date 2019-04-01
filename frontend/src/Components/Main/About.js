import React, { Component } from 'react';
import Img from '../../images/boy.png';
import Git from '../../images/github-logo.svg';
import In from '../../images/linkedin-logo-button.svg';


export class About extends Component {
  render() {
    return (
      <section id="about" className="color-white grid">

        <article className="co-founder grid padding">
           <figure className="filter">
               <img src={Img}/>
                <div className="flex co-founder-info">
                   <h2>
                       Miguel Chávez 
                   </h2>
                   <p>
                       Cofundador, Front-End Developer
                   </p>
                    <div className="flex">
                        <a href="#"><img className="icons" src={Git} /></a>
                        <a href="#"><img className="icons" src={In} /></a>
                   </div>
                </div>
           </figure> 

            <figure className="filter">
                <img src={Img} />
                <div className="flex co-founder-info">
                    <h2>
                        Viviane Souza
                    </h2>
                    <p>
                        Cofundador, Back-End Developer
                    </p>
                    <div className="flex">
                        <a href="#"><img className="icons" src={Git} /></a>
                        <a href="#"><img className="icons" src={In} /></a>
                    </div>
                </div>
            </figure> 

            <figure className="filter">
                <img src={Img} />
                <div className="flex co-founder-info">
                    <h2>
                        Joana Rijo
                    </h2>
                    <p>
                        Cofundador, Back-End Developer
                    </p>
                    <div className="flex">
                        <a href="#"><img className="icons" src={Git} /></a>
                        <a href="#"><img className="icons"src={In} /></a>
                    </div>
                </div>
           </figure> 
        </article>

            <article className="about purple-gradient padding">
                <h3 className="purple-line">Quem Somos</h3>

            <p>
                Conheça a equipa que deu origem à Plataforma 
                Quebra o Silêncio, para melhorar a comunicação...
            </p>
        </article>
      </section>
    )
  }
}

export default About;