import React, { Component } from "react";
import Icon from "./../common/Icon";
import { withRouter, Link } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideNav.scss";

const hideLogo = {
  display: "none"
};

const showLogo = {
  display: "block",
  fontSize: "15px",
  textTransform: "uppercase",
  position: "absolute",
  right: "12px",

  color: "#fff"
};

export class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isSideBarOpen: false, sideMenu: hideLogo };
  }

  handleSideBar = () => {
    if (this.state.isSideBarOpen) {
      this.setState({ sideMenu: hideLogo, isSideBarOpen: false });
    } else {
      this.setState({ sideMenu: showLogo, isSideBarOpen: true });
    }
  };

  render() {
    return (
      <div>
        <SideNav
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle onClick={() => this.handleSideBar()} />
          <SideNav.Nav defaultSelected="home">
            <h1 style={this.state.sideMenu} className="logo--profile">
              Quebra{" "}
              <span className="color-logo" style={{ color: "#C5BBEF" }}>
                o Silêncio
              </span>
            </h1>
            <NavItem eventKey="home">
              <NavIcon>
              <Link to="/process"><Icon
                  className="icon-logged"
                  icon="book-open"
                  style={{ fontSize: "1.75em" }}
                /></Link>
              </NavIcon>
              <NavText>
                <Link to="/process">Processo</Link>
              </NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
              <Link to="/victimChat"><Icon
                  className="icon-logged"
                  icon="comment-dots"
                  style={{ fontSize: "1.75em" }}
                /></Link>
              </NavIcon>
              <NavText>
                <Link to="/victimChat">Chat | Menssagens</Link>
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default withRouter(SideNavBar);
