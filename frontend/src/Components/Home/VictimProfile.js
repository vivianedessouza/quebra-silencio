import React, { Component } from "react";
import imageProcess from "./../../images/image_process.jpg";
import LoggedHome from "./LoggedHome";
import Icon from "./../common/Icon";

export class VictimProfile extends Component {
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
                <p className="single">Solteiro(a)</p>
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
          <h1 className="description-edit"> Descrição Atual</h1>
          <div className="edit-text victim-profile-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ornare ipsum est, consectetur tincidunt tellus vestibulum et.
              Fusce tempus nisi nulla. Aliquam cursus eros id justo ultrices
              finibus. Nulla vestibulum malesuada lorem, nec dictum purus. Sed
              ornare odio dui, et vulputate ligula ultrices a. Aliquam quis
              laoreet leo, rhoncus dignissim velit. Phasellus lacinia tempus
              ante sed euismod. Pellentesque in dolor placerat nulla venenatis
              auctor.{" "}
            </p>
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

export default VictimProfile;
