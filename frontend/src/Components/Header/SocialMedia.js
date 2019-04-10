import React, { Component } from 'react';
import Facebook from '../../images/facebook-logo.svg';
import Instagram from '../../images/instagram-logo.svg';
import Twitter from '../../images/twitter-logo.svg';

export class SocialMedia extends Component {
  render() {
    return (
    <ul className="media social-media">
        <li className="icons"><a href="https://www.facebook.com/checkpoint/?next=https%3A%2F%2Fwww.facebook.com%2F"><img src={Facebook} /></a></li>
        <li className="icons"><a href="https://www.instagram.com/quebra.silencio/?hl=pt"><img src={Instagram} /></a></li>
        <li className="icons"><a href="https://twitter.com/o_quebra"><img src={Twitter} /></a></li>
    </ul> 
    )
  }
}

export default SocialMedia
