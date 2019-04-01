import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

export class HeaderContents extends Component {
  render() {
    return (
      <div className="headerContents color-white">
        <p>87.830</p>
        <p>
            Actos Criminosos de <span className="color-purple"> Violência Domêstica </span>
            em Portugal, apenas em 2017. 
        </p>
        
        <div className="btn">
            <div className=".background-color"></div>
            <div></div>
            <div></div>
        </div> 

        <SocialMedia />
              
      </div>

    )
  }
}
export default HeaderContents;
