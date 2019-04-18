import React, { Component } from "react";
import Icon from "./../common/Icon";
import { withRouter, link } from "react-router-dom";

export class mySideBarIcon extends Component {
  render() {
    return (
      <div>
        <div className="separator" />
        <div className="side-bar-color-icon">
          <Icon className="icon-logged" icon="book-open" />
          <Icon className="icon-logged" icon="comment-dots" />
        </div>
      </div>
    );
  }
}

export default mySideBarIcon;
