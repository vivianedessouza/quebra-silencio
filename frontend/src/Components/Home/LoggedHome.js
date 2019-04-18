import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import MySideBar from "./MySideBar";
import NavBar from "./NavBar";
import "./Profile.scss";

class LoggedHome extends Component {
  render() {
    return (
      <div>
        <div className="logged-container">
          <MySideBar />
          <NavBar />
        </div>
      </div>
    );
  }
}

export default withRouter(LoggedHome);
