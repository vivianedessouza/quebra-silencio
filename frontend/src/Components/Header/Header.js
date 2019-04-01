import React, { Component } from 'react';
import './Header.scss';
import Contents from './HeaderContents';
import NavBar from './NavBar';


export class Header extends Component {
  render() {
    return (
      <header id="home">
        <NavBar />
        <Contents />
      </header>
    );
  }
}

export default Header
