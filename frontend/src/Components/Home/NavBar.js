import React, { Component } from "react";
import Icon from "./../common/Icon";
import PanelStatus from "./PanelStatus";
import { withRouter, link } from "react-router-dom";

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isSideBarOpen: false, hideShowPanel: false };
  }

  handlePanel = () => {
    this.setState({ hideShowPanel: !this.state.hideShowPanel });
  };

  render() {
    return (
      <div>
        
        <div className="nav-bar" />
        <div className="aside-color" />
        <div className="img-header">
          <img src="./../../images/img-marker.png" />
        </div>
        <div onClick={() => this.handlePanel()}>
          <Icon
            className="double-down"
            icon={
              this.state.hideShowPanel ? "angle-double-down" : "angle-double-up"
            }
          />
        </div>
        <div className="welcome">
          <h3>Bem-vindo(a)</h3>
          <h3 className="user-name">Viviane Souza</h3>
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
