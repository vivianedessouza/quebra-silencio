import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import CountUp from 'react-countup';

export class HeaderContents extends Component {
  render() {
    return (
      <div className="headerContents color-white">
        <SocialMedia />   
      </div>
    );
  }
}
export default HeaderContents