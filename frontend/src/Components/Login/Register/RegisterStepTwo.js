import React, { Component } from "react";
import Icon from "./../../common/Icon";
import { withRouter, Link } from "react-router-dom";
import Dropzone from "react-dropzone";
import request from "./../../services/api";

import "./Register.scss";

class RegisterStepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      erros: []
    };
  }

  componentDidMount() {
    this.loadStates();
  }

  componentWillMount() {
    const profile = localStorage.getItem("profileObj");
    if (profile) {
      const {
        name,
        username,
        password,
        email,
        phone,
        profile_img
      } = JSON.parse(profile);
      this.setState({
        name,
        username,
        password,
        email,
        phone,
        profile_img
      });
    }
  }

  loadStates = async () => {
    const response = await request.get("/states");
    this.setState({ states: response.data.states });
  };

  handleFormSubmit = () => {
    const { name, username, password, email, phone, profile_img } = this.state;

    const select = document.getElementById("selectStates");
    const optionsSelected = select.options[select.selectedIndex];
    const selectedState = optionsSelected.value;
    if (!this.validateForm(selectedState)) {
      return;
    }
    const profile = {};
    profile.name = name;
    profile.username = username;
    profile.password = password;
    profile.email = email;
    profile.phone = phone;
    profile.state_id = selectedState;
    profile.profile_img = "pro.jpg";
    profile.document_img = "pro.jpg";

    localStorage.setItem("profileObj", JSON.stringify(profile));

    const path = this.props.location.state.isProfessional
      ? "/registerStepThreeProfessional"
      : "/registerStepThreeVictim";

    this.props.history.push({
      pathname: path,
      state: {
        isProfessional: this.props.location.state.isProfessional
      }
    });
  };

  validateForm = selectedState => {
    let isValid = true;

    if (this.state.password !== this.state.passwordConfirm) {
      isValid = false;
      alert("As passwords não correspondem.");
    } else if (!selectedState) {
      isValid = false;
      alert("A localidade deve ser escolhida.");
    } else if (this.state.name.length === 0) {
      isValid = false;
      alert("Name can't be empty");
    }
    if (this.state.email.length < 5) {
      isValid = false;
      alert("Email should be at least 5 charcters long");
    }
    if (this.state.email.split("").filter(x => x === "@").length !== 1) {
      isValid = false;
      alert("Email should contain a @");
    }
    if (this.state.email.indexOf(".") === -1) {
      isValid = false;
      alert("Email should contain at least one dot");
    }
    if (this.state.password.length < 6) {
      isValid = false;
      alert("Password should be at least 6 characters long");
    }

    return isValid;
  };

  render() {
    return (
      <div className="external--container">
        <h1 className="logo">
          Quebra <span className="color-purple">o Silêncio</span>
        </h1>
        <div className="main--section">
          <h1 className="title">Crie a sua Conta</h1>
          <p className="steps">Passo 2 de 3</p>
          <p className="text">
            Tipo de conta - Escolha Encontra-se numa situação… e procura
            aconselhamento psicológico ou … Quer ajudar….
          </p>
          <div className="input--group">
            <span className="fill--input spacer input-left">
              <Icon icon="user" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="user" className="input-icon" />
              <input
                required
                className="input-text"
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
            </span>
            <span className="fill--input input-left">
              <Icon icon="lock" className="input-icon" />
              <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Palavra-passe"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="lock" className="input-icon" />
              <input
                className="input-text"
                type="password"
                name="passwordConfirm"
                placeholder="Confirmar Palavra-passe"
                value={this.state.passwordConfirm}
                onChange={event =>
                  this.setState({ passwordConfirm: event.target.value })
                }
              />
            </span>
            <span className="fill--input input-left">
              <Icon icon="envelope" className="input-icon" />
              <input
                className="input-text"
                type="email"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
            </span>
            <span className="fill--input input-right">
              <Icon icon="phone" className="input-icon" />
              <input
                className="input-text"
                type="text"
                name="phone"
                placeholder="Contacto Telefónico (Opcional)"
                value={this.state.phone}
                onChange={event => this.setState({ phone: event.target.value })}
              />
            </span>
            <span className="fill--input input-left ">
              <Icon icon="map-marker-alt" className="input-icon" />
              <select
                id="selectStates"
                include="form-input-select()"
                required
                className="form-input-select"
              >
                <option value="">Localidade - Distrito</option>
                {this.state.states.map(stateValue => (
                  <option
                    key={stateValue.id}
                    value={stateValue.id}
                    onChange={event =>
                      this.setState({ state: event.target.value })
                    }
                  >
                    {stateValue.state}
                  </option>
                ))}
              </select>
            </span>
            <span className="file--input input-right">
              <Icon
                icon="upload"
                className="input-icon input-icon-formatting"
              />
              <Dropzone
                onDrop={acceptedFiles => {
                  // handle the file
                  console.log("FIles", acceptedFiles);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <p>Upload - Foto de Perfil (Opcional)</p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </span>

            <div>
              <button
                className="next--step"
                onClick={() => this.handleFormSubmit()}
              >
                Passo seguinte
              </button>
            </div>
            <div>
              <Link to={"/registerStepOne"} className="back--step">
                Voltar Atrás
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterStepTwo);
