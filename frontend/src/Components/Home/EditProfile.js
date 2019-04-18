import React, { Component } from "react";
import LoggedHome from "./LoggedHome";
import PanelStatus from "./PanelStatus";

class EditProfile extends Component {
  render() {
    return (
      <div>
        <LoggedHome />
        <div className="edit-container">
          <div className="edit-personal-information">
            <div className="upload-image">
              <p>Upload foto de perfil</p>
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
                  <label className="phone" for="phone">
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
                  <option value="lisboa">lisboa</option>
                  <option value="Braga">Braga</option>
                  <option value="Porto">Porto</option>
                </select>
                <label for="distrito">Distrito</label>
              </div>
              <div className="section-option civil-option">
                <select name="estado-civil">
                  <option value="solteiro">Solteiro</option>
                  <option value="Casado">Casado</option>
                </select>
                <label for="civil">Estado civil</label>
              </div>
            </form>
            <div className="save-changes-btn">
              <p>Guardar Alterões</p>
            </div>
            <div className="discart-changes-btn">
              <p>Descartar Alterões</p>
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

export default EditProfile;