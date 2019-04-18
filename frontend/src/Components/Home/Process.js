import React, { Component } from 'react';
import LoggedHome from "./LoggedHome";
import PanelStatus from "./PanelStatus";

export class Process extends Component {
  render() {
    return (
      <div>
           <LoggedHome />
           <div className="edit-container">
          </div>
      </div>
    )
  }
}

export default Process
