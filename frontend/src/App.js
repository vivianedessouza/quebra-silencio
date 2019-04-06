import React, { Component } from 'react';
//import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.scss';
//import Header from './Components/Header/Header';
//import HeaderContents from './Components/Header/HeaderContents';
import LoginRegister from "./Components/Header/Login/LoginRegister";
import UploadDoc from "./Components/Header/Login/Register/UploadDoc";
import Reset from "./Components/Header/Login/Register/Reset";
import ExpiredLink from "./Components/Header/Login/Register/ExpiredLink";
import AccountFirstStep from "./Components/Header/Login/Register/AccountFirstStep";
import AccountSecStep from "./Components/Header/Login/Register/AccountSecStep";
import AccountThirdStep from "./Components/Header/Login/Register/AccountThirdStep";
//import HeaderContents from './Components/Header/HeaderContents';
//import HowItWorks from './Components//Main/HowItWorks';
//import About from './Components//Main/About';
//import Contacts from './Components//Main/Contacts';
//import Main from "./Components/Main/Main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
     <UploadDoc/>
     //<AccountThirdStep/>
      //<AccountSecStep/>
      //<AccountFirstStep/>
      //<LoginRegister/>
      //<ExpiredLink/>
      //<Reset/>
      // <div className="App">
      // <Header/>

      // <Main>
      // <BrowserRouter>
      // <Switch>
      //       <Route exact={true} path="/" component={ HeaderContents }/>
      //       <Route  path="./Main/HowItWorks" component={ HowItWorks }/>
      //       <Route  path="./Main/About" component={ About }/>
      //       <Route  path="./Main/Contacts" component={ Contacts }/>
      //   </Switch>
      // </BrowserRouter>
      // </Main>  
      // </div>
    );
  }
}

export default App;
