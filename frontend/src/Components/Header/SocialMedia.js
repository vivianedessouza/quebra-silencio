import React, { Component } from 'react';
import Facebook from '../../images/facebook-logo.svg';
import Instagram from '../../images/instagram-logo.svg';
import Twitter from '../../images/twitter-logo.svg';

export class SocialMedia extends Component {
  render() {
    return (
    <ul className="media social-media">
        <li className="icons"><a href="#"><img src={Facebook} /></a></li>
        <li className="icons"><a href="#"><img src={Instagram} /></a></li>
        <li className="icons"><a href="#"><img src={Twitter} /></a></li>
    </ul> 
    )
  }
}

export default SocialMedia
