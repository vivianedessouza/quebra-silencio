import React, { Component } from "react";
import Icon from "../common/Icon";
import imageProcess from "./../../images/image_process.jpg";
import { withRouter, Link } from "react-router-dom";
import LoggedHome from "./LoggedHome";
import request from "../services/api";
import apis from "../../utils/Constants";

export class ProfessionalProfile extends Component {
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

  handleEditProfile = () => {
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
                <h2>{this.state.user.name}</h2>
                <img src="./../../images/img-marker.png" />
              </div>
              <div className="victim-username">
                <p>{this.state.user.username}</p>
                <p className="single">{this.state.user.role}</p>
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
              onClick={() => this.handleEditProfile}
            >
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

export default withRouter(ProfessionalProfile);
