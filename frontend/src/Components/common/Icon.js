import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faUser,
  faEnvelope,
  faCheck,
  faMap,
  faUpload,
  faPhone,
  faInfo,
  faChevronDown,
  faCommentDots,
  faBookOpen,
  faAngleDoubleDown,
  faAngleDoubleUp
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faLock,
  faUser,
  faEnvelope,
  faCheck,
  faMap,
  faUpload,
  faPhone,
  faInfo,
  faChevronDown,
  faCommentDots,
  faBookOpen,
  faAngleDoubleDown,
  faAngleDoubleUp
);

class Icon extends Component {
  render() {
    return (
      <FontAwesomeIcon
        className={this.props.className}
        icon={this.props.icon}
        style={this.props.style}
      />
    );
  }
}

export default Icon;
