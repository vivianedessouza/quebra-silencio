import React, { Component } from "react";
import Icon from "../common/Icon";
import imageProcess from "./../../images/image_process.jpg";
import LoggedHome from "./LoggedHome";

export class ProfessionalProfile extends Component {
  render() {
    return (
      <div>
        <LoggedHome />
        <div className="edit-container">
          <div className="edit-personal-information container-victim-profile">
            <div>
              <img
                src={imageProcess}
                alt="avatar"
                width="230"
                height="230"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="victim-information-profile">
              <div className="victim-name">
                <h2>Viviane da silva souza</h2>
                <img src="./../../images/img-marker.png" />
              </div>
              <div className="victim-username">
                <p>Nome_Username</p>
                <p className="single">Psicólogo(a)</p>
              </div>
              <div className="victim-localization">
                <p>
                  <Icon className="map-marker-alt" icon="marker" />
                  Lisboa
                </p>
                <p>
                  <Icon className="phone" icon="phone" />
                  910000000
                </p>
              </div>
            </div>
            <div className="save-changes-btn">
              <p>
                <Icon className="edit" icon="edit" />
                Editar Perfil
              </p>
            </div>
          </div>
          <div className="edit-content" />
          <h1 className="description-edit"> Histórico??</h1>
          <div className="professional-profile-historic">
            <div className="históric-box">
              <p>3 Casos Pendentes</p>
            </div>
            <div className="históric-box">
              <p>23 Casos Resolvidos</p>
            </div>
            <div className="históric-box">
              <p>Classificação Geral Vitimas - Pontuação 1 a 5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalProfile;
