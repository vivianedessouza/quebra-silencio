import React, { Component } from 'react';
import './Main.scss';
import HowItWorks from './HowItWorks';
import About from './About';
import Contacts from './Contacts';

export class Main extends Component {
  render() {
    return (
    <main>
    <HowItWorks />
    <About />
    <Contacts />
    </main>
    )
  }
}

export default Main

