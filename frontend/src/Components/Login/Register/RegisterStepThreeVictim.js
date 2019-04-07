import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Icon from "./../../common/Icon";
import "./Register.scss";


class RegisterStepThreeVictim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      victimStyle: "btn-users",
      psychologistStyle: "btn-users",
      lawyerStyle: "btn-users",
      isProfessional: undefined,
      errorMessage: ""
    };
  }

  chooseAccountType = (isProfessional, professionalType) => {
    this.setState({ isProfessional });

    let lawyer,
      psychologist,
      victim = "";

    switch (professionalType) {
      case "lawyer":
        lawyer = "btn-users-selected";
        psychologist = "btn-users";
        victim = "btn-users";
        break;
      case "psychologist":
        lawyer = "btn-users";
        psychologist = "btn-users-selected";
        victim = "btn-users";
        break;
      default:
        lawyer = "btn-users";
        psychologist = "btn-users";
        victim = "btn-users-selected";
        break;
    }

    this.setState({
      lawyerStyle: lawyer,
      psychologistStyle: psychologist,
      victimStyle: victim
    });
  };


  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section position-center">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 3 de 3</p>
          <p className="text">Preencher dados - Ajuda</p>
          <div>
            <div
              className={this.state.psychologistStyle}
            onClick={() => this.chooseAccountType(true, "psychologist")}
             
            >
              <p>Psicólogo(a)</p>
              {this.state.psychologistStyle === "btn-users-selected" && (
              <Icon className="icon-check" icon="check" />
            )}
            </div>
            <div
               className={this.state.lawyerStyle}
            onClick={() => this.chooseAccountType(true, "lawyer")}
              
            >
              <p>Advogado(a)</p>

              {this.state.lawyerStyle === "btn-users-selected" && (
              <Icon className="icon-check" icon="check" />
            )}
            </div>
          </div>
          <textarea className="situation--description">
            Descreva a sua situação… Esta informação estará visível apenas para
            profissionais que a possam ajudar
          </textarea>
          <div className="fill--input input-left input-formatting">
          <Icon icon="info" className="input-icon" />
          <input
            type="text"
            className="input-text"
            name="state"
            placeholder="Estado Civil"
          />
          </div>
          <div>
            <Link to={"/chat"} className="next--step">
              Passo seguinte
              <hr/>
            </Link>
          </div>
          <div>
            <Link to={{
                pathname: "/registerStepTwo",
                state: {
                  isProfessional: this.props.location.state.isProfessional
                }
              }} className="back--step">
              Voltar Atrás
              <hr/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepThreeVictim);
