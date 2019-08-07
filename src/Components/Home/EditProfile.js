import React, { Component } from "react";
import LoggedHome from "./LoggedHome";
import { withRouter } from "react-router-dom";
import Dropzone from "react-dropzone";
import api from "./../services/api";

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      civilStatus: [],
      states: []
    };
  }
  componentDidMount() {
    this.loadStates();
    this.loadCivilStatus();
  }

  loadStates = async () => {
    const response = await api.get("/states");
    this.setState({ states: response.data.states });
  };

  loadCivilStatus = async () => {
    const response = await api.get("/status");
    this.setState({ civilStatus: response.data.status });
  };

  handleVictimProfile = () => {
    this.props.history.push("/victimProfile");
  };
  render() {
    return (
      <div>
        <LoggedHome />
        <div className="edit-container">
          <div className="edit-personal-information">
            <div className="upload-image">
              <Dropzone
                onDrop={acceptedFiles => {
                  // handle the file
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input className="input-dropzone" {...getInputProps()} />
                      <p>Upload foto de perfil</p>
                    </div>
                  </section>
                )}
              </Dropzone>
            </div>
            <div className="remove-photo">
              <p>Remover foto</p>
            </div>

            <form name="message" method="post" className="form-edit-profile">
              <section>
                <div>
                  <input
                    className="input-edit-profile"
                    id="name"
                    type="text"
                    name="name"
                  />
                  <label for="name">Primeiro e último nome</label>
                </div>
                <div className="input-edit-email-phone">
                  <input id="email" type="text" name="email" />
                  <input id="phone" type="number" name="phone" />
                </div>
                <div className="'contact-label">
                  <label className="email" for="email">
                    Email
                  </label>
                  <label className="phone-edit" for="phone">
                    Contacto tefónico
                  </label>
                </div>

                <div>
                  <input
                    className="input-edit-profile"
                    id="password"
                    type="password"
                    name="password"
                  />
                  <label className="password" or="password">
                    Palavra-passe
                  </label>
                </div>
              </section>
              <br />
              <div className="section-option">
                <select name="distrito">
                  {this.state.states.map(states => (
                    <option key={states.id} value="Lisboa">
                      {states.state}
                    </option>
                  ))}
                </select>
                <label for="distrito">Distrito</label>
              </div>
              <div className="section-option civil-option">
                <select name="estado-civil">
                  {this.state.civilStatus.map(civil => (
                    <option key={civil.id} value="Solteiro">
                      {civil.civil_status}
                    </option>
                  ))}
                </select>
                <label for="civil">Estado civil</label>
              </div>
            </form>
            <div
              className="save-changes-btn"
              onClick={() => this.handleVictimProfile()}
            >
              <p>Guardar Alterações</p>
            </div>
            <div
              className="discart-changes-btn"
              onClick={() => this.handleVictimProfile()}
            >
              <p>Descartar Alterações</p>
            </div>
          </div>
          <div className="edit-content" />
          <h1 className="description-edit"> Descrição Atual</h1>
          <div className="edit-text">
            <input type="text" placeholder="" />
          </div>
          <p className="edit-footer-information">
            Toda a informação do seu perfil é privada… apenas partilhado com os
            profissionais que lhe derem aconselhamento.
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(EditProfile);
