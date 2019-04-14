import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import PanelStatus from "./PanelStatus";
import Icon from "./../common/Icon";
import "./Profile.scss";

const openNav = {
  width: "250px",
  marginLeft: "0px"
};
const closeNav = {};

class LoggedHome extends Component {
  constructor(props) {
    super(props);
    this.state = { isSideBarOpen: false, hideShowPanel: false };
  }

  handleSideBar = () => {
    if (this.state.isSideBarOpen) {
      this.setState({ sideMenu: closeNav, isSideBarOpen: false });
    } else {
      this.setState({ sideMenu: openNav, isSideBarOpen: true });
    }
  };

  handlePanel = () => {
    this.setState({ hideShowPanel: !this.state.hideShowPanel });
  };

  render() {
    return (
      <div>
        <div className="logged-container">
          <div id="mysidebar" style={this.state.sideMenu} className="sidebar">
            <a className="closebtn" onClick={() => this.handleSideBar()}>
              &times;
            </a>
            <h1 className="logo--profile">
              Quebra <span className="color-logo">o Silêncio</span>
            </h1>
            <div className="separator" />
            <Icon className="icon-logged" icon="book-open" />
            <a className="aside-link" href="#">
              Processo
            </a>
            <Icon className="icon-logged" icon="comment-dots" />
            <a className="aside-link" href="#">
              Chat | Menssagens
            </a>
            <Icon className="icon-logged" icon="book-open" />
            <a className="aside-link" href="#">
              Processo
            </a>
            <Icon className="icon-logged" icon="comment-dots" />
            <a className="aside-link" href="#">
              Chat | Menssagens
            </a>
          </div>
          <div id="main">
            <button className="openbtn" onClick={() => this.handleSideBar()}>
              &#9776;
            </button>
          </div>
          <div className="nav-bar" />
          <div className="aside-color" />
          <div className="img-header">
            <img src="./../../images/img-marker.png" />
          </div>
          <div onClick={() => this.handlePanel()}>
            <Icon
              className="double-down"
              icon={
                this.state.hideShowPanel
                  ? "angle-double-down"
                  : "angle-double-up"
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
        <div className="barra-lateral" />
      </div>
    );
  }
}

export default withRouter(LoggedHome);
