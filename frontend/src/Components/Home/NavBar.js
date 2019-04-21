import React, { Component } from "react";
import Icon from "./../common/Icon";
import PanelStatus from "./PanelStatus";
import { withRouter } from "react-router-dom";
import defaultPic from "../../images/default_pic.png";
import axios from "axios";
import { apis } from "../../utils/Constants";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideBarOpen: false,
      hideShowPanel: false,
      username: "Viviane Souza DEMO"
    };
  }

  componentDidMount() {
    this.getUserInfo();
  }

  handlePanel = () => {
    this.setState({ hideShowPanel: !this.state.hideShowPanel });
  };

  getUserInfo = () => {
    const url = apis.userInfo + "viviane@mgail.com";
    axios.get(url).then(res => {
      this.setState({ username: res.data.user.name });
    });
  };

  render() {
    return (
      <div>
        <div className="nav-bar" />
        <div className="img-header">
          <img
            src={defaultPic}
            style={{
              backgroundColor: "gray",
              borderRadius: "50%",
              height: "40px",
              position: "absolute",
              top: "14px"
            }}
          />
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
