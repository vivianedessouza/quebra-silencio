import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Icon from "./../../common/Icon";
import "./Register.scss";

class RegisterStepOne extends Component {
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
      victimStyle: victim,
      errorMessage: "",
      isProfessional
    });
  };

  goToNextPage = () => {
    if (this.state.isProfessional === undefined) {
      this.setState({ errorMessage: "Escolha o tipo de conta." });
      return;
    }

    this.props.history.push({
      pathname: "/registerStepTwo",
      state: { isProfessional: this.state.isProfessional }
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
          <p className="steps">Passo 1 de 3</p>
          <p className="text">
            Tipo de conta - Escolha Encontra-se numa situação… e procura
            aconselhamento psicológico ou … Quer ajudar….
          </p>
          <div
            className={this.state.victimStyle}
            onClick={() => this.chooseAccountType(false, null)}
          >
            <p>Vítima</p>
            {this.state.victimStyle === "btn-users-selected" && (
              <Icon className="icon-check" icon="check" />
            )}
          </div>
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
          <div>
            {this.state.errorMessage && (
              <div className="alert alert-danger alert--position">
                <strong>Oops!</strong> {this.state.errorMessage}
              </div>
            )}
            <p
              onClick={() => this.goToNextPage()}
              className="next--step"
            >
              Passo seguinte
              <hr />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepOne);
