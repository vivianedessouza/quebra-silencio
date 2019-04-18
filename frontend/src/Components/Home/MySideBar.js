import React, { Component } from "react";
import Icon from "./../common/Icon";
import { withRouter, Link } from "react-router-dom";


const openNav = {
  width: "250px",
  marginLeft: "0px"
};
const closeNav = {};

export class MySideBar extends Component {
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
  render() {
    return (
      <div>
        <div id="top-bar-buttom">
          <button className="openbtn" onClick={() => this.handleSideBar()}>
            &#9776;
          </button>
        </div>
        <div id="mysidebar" style={this.state.sideMenu} className="sidebar">
          <a className="closebtn" onClick={() => this.handleSideBar()}>
            &times;
          </a>
          <h1 className="logo--profile">
            Quebra <span className="color-logo">o Silêncio</span>
          </h1>
          <div className="separator" />
          <Icon className="icon-logged" icon="book-open" />
          <Link to="" className="aside-link" href="#">
            Processo
          </Link>
          <Icon className="icon-logged" icon="comment-dots" />
          <a className="aside-link" href="#">
            Chat | Menssagens
          </a>
        </div>
        <div className="side-bar-color" />
      </div>
    );
  }
}

export default withRouter(MySideBar);
