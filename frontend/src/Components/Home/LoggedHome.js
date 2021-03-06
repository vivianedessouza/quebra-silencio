import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import SideNavBar from "./SideNavBar";
import NavBar from "./NavBar";
import "./Profile.scss";
import "./SideNav.scss";

class LoggedHome extends Component {
  render() {
    return (
      <div>
        <div className="logged-container">
          <SideNavBar />
          <NavBar />
          
        </div>
      </div>
    );
  }
}

export default withRouter(LoggedHome);
