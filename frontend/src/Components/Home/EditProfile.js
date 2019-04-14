import React, { Component } from 'react'
import LoggedHome from './LoggedHome';
import PanelStatus from './PanelStatus';

class EditProfile extends Component {
  render() {
    return (
      <div>
          <LoggedHome/>
          <PanelStatus/>
        
      </div>
    )
  }
}

export default EditProfile
