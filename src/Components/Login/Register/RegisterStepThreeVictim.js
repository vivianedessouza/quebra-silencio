import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Icon from "./../../common/Icon";
import "./Register.scss";
import request from "./../../services/api";
import apis from "../../../utils/Constants";

class RegisterStepThreeVictim extends Component {
  constructor(props) {
    super(props);
    this.state = {
      victimStyle: "btn-users",
      psychologistStyle: "btn-users",
      lawyerStyle: "btn-users",
      isProfessional: undefined,
      errorMessage: "",
      civilStatus: [],
      description: "",
      name: "",
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      phone: "",
      states: [],
      profile_img: "",
      document_img: "",
      role_id: "",
      status_id: "",
      state_id: "",
      help_type: "",
      erros: [],
      professionalType: ""
    };
  }
  componentDidMount() {
    this.loadCivilStatus();
  }

  handleFormSubmit = () => {
    const { description } = this.state;
    const profile = JSON.parse(localStorage.getItem("profileObj"));
    profile.description = description;
    profile.status_id = this.getStatus().toString();
    profile.help_type = this.state.professionalType === "lawyer" ? "2" : "3";
    profile.role_id = "1";

    request
      .post(apis.register, profile)
      .then(res => {
        this.doLogin(res.data.description, profile.username, profile.password);
      })
      .catch(e => {
        alert("Já há uma conta com este username. Por favor, escolha outro.");
      });
  };

  doLogin = (message, username, password) => {
    const body = {
      username,
      password
    };

    request
      .post(apis.logIn, body)
      .then(res => {
        alert(message);
        localStorage.removeItem("profileObj");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("userId", res.data.id);
        this.props.history.push("/victimProfile");
      })
      .catch(error => {
        console.log("Entrou aqui no catch", error);

        this.setState({ isLoading: false });

        if (error && error.response && error.response.status)
          switch (error.response.status) {
            case 404:
              this.setState({ errorMessage: "Username não encontrado." });
              break;
            case 401:
              this.setState({ errorMessage: "Email ou senha, inválidos." });
              break;
            default:
              this.setState({
                errorMessage: "Não foi possível realizar o seu login."
              });
              break;
          }
      });
  };

  getStatus = () => {
    const select = document.getElementById("selectStatus");
    return select.options[select.selectedIndex].value;
  };

  loadCivilStatus = () => {
    request
      .get(apis.status)
      .then(response => {
        this.setState({ civilStatus: response.data.status });
      })
      .catch(error => {
        console.error(error);
      });
  };

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
      victimStyle: victim,
      professionalType: professionalType
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
          <div className="flex">
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
          <div className="textarea-container" contentEditable="true">
            <textarea
              className="situation--description"
              placeholder="Descreva a sua situação… Esta informação estará visível apenas para
            profissionais que a possam ajudar"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </div>

          <span className="fill--input input-left input-formatting flex">
            <Icon icon="info" className="input-icon" />
            <select
              id="selectStatus"
              include="form-input-select()"
              required
              className="form-input-select"
            >
              <option value="">Estado Civil</option>
              {this.state.civilStatus.map(civil => (
                <option key={civil.id} value={civil.id}>
                  {civil.civil_status}
                </option>
              ))}
            </select>
          </span>

          <div>
            <button
              className="next--step"
              onClick={() => this.handleFormSubmit()}
            >
              Enviar
            </button>
          </div>
          <div>
            <Link
              to={{
                pathname: "/registerStepTwo",
                state: {
                  isProfessional: this.props.location.state.isProfessional
                }
              }}
              className="back--step"
            >
              Voltar Atrás
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepThreeVictim);
