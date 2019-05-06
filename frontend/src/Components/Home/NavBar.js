import React, { Component } from "react";
import Icon from "./../common/Icon";
import PanelStatus from "./PanelStatus";
import { withRouter } from "react-router-dom";
import defaultPic from "../../images/default_pic.png";
import request from "../services/api";
import apis from "../../utils/Constants";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false,
      hideShowPanel: false,
      username: ""
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    this.getUserInfo(userId, token);
  }

  handlePanel = () => {
    this.setState({ hideShowPanel: !this.state.hideShowPanel });
  };

  getUserInfo = (userId, token) => {
    const url = apis.userInfo + userId;
    request
      .get(url, { headers: { "x-access-token": token } })
      .then(res => {
        const user = res.data["user"][0];
        localStorage.setItem("userInfo", JSON.stringify(user));
        this.setState({ username: user.username });
      })
      .catch(error => {
        console.log("Catch getUserInfo", error);
      });
  };

  render() {
    return (
      <div>
        <div className="nav-bar" />
        <div className="img-header">
          <img src={defaultPic} />
        </div>
        <div onClick={() => this.handlePanel()}>
          <Icon
            className="chevron-down"
            icon={
              this.state.hideShowPanel ? "angle-double-down" : "chevron-down"
            }
          />
        </div>
        <div className="welcome">
          <h3>Bem-vindo(a)</h3>
          <h3 className="user-name">{this.state.username}</h3>
        </div>
        <div className="onlineCircle">
          <img src="http://www.clker.com/cliparts/e/E/F/G/p/g/alex-green-circle-md.png" />
        </div>
        {this.state.hideShowPanel && <PanelStatus />}
      </div>
    );
  }
}

export default withRouter(NavBar);
