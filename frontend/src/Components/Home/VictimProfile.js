import React, { Component } from "react";
import imageProcess from "./../../images/image_process.jpg";
import LoggedHome from "./LoggedHome";
import Icon from "./../common/Icon";
import { withRouter } from "react-router-dom";
import request from "../services/api";
import apis from "../../utils/Constants";

export class VictimProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    this.getUserInfo(userId, token);
  }

  getUserInfo = (userId, token) => {
    const url = apis.userInfo + userId;
    request
      .get(url, { headers: { "x-access-token": token } })
      .then(res => {
        const user = res.data["user"][0];
        localStorage.setItem("userInfo", JSON.stringify(user));
        this.setState({ user });
      })
      .catch(error => {
        console.log("Catch getUserInfo", error);
      });
  };

  handleVictimEditProfile = () => {
    this.props.history.push("/editProfile");
  };

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
                <h2>
                  {this.state.user.name}
                  <img
                    style={{ width: "10px", height: "10px" }}
                    src="http://www.clker.com/cliparts/e/E/F/G/p/g/alex-green-circle-md.png"
                  />
                </h2>
              </div>
              <div className="victim-username">
                <p>{this.state.user.username}</p>
                <p className="single">{this.state.user.civil_status}</p>
              </div>
              <div className="victim-localization">
                <p>
                  <Icon icon="map-marker-alt" className="phone" />
                  {this.state.user.state}
                </p>
                <p>
                  <Icon className="phone" icon="phone" />
                  {this.state.user.phone}
                </p>
              </div>
            </div>
            <div
              className="save-changes-btn"
              onClick={() => this.handleVictimEditProfile()}
            >
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
              auctor.
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

export default withRouter(VictimProfile);
