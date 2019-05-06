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
  faAngleDoubleUp,
  faChevronRight,
  faChevronUp,
  faMapMarkerAlt,
  faEdit,
  faSearch,
  faCompress,
  faAngleRight
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
  faAngleDoubleUp,
  faChevronRight,
  faChevronUp,
  faMapMarkerAlt,
  faEdit,
  faSearch,
  faCompress,
  faAngleRight
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
