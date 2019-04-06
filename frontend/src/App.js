import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Switch from "react-router-dom/Switch";
import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import LoggedHome from "./Components/Home/LoggedHome";
import LoginRegister from "./Components/Login/LoginRegister";
import RegisterStepOne from "./Components/Login/Register/RegisterStepOne";
import RegisterStepTwo from "./Components/Login/Register/RegisterStepTwo";
import RegisterStepThreeProfessional from "./Components/Login/Register/RegisterStepThreeProfessional";
import RegisterStepThreeVictim from "./Components/Login/Register/RegisterStepThreeVictim";
import Page404 from "./Components/Errors/Page404";
import ForgotPassword from "./Components/Login/Register/ForgotPassword";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLock,
  faUser,
  faEnvelope,
  faCheck,
  faMap,
  faUpload,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
library.add(faLock, faUser, faEnvelope, faCheck, faMap, faUpload, faPhone);

const LandingPage = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

const AuthRoute = function({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={() =>
        /*checa se esta logado*/ false ? (
          <Component {...props} />
        ) : (
          <LandingPage />
        )
      }
    />
  );
};

const NonAuthRoute = function({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={() =>
        /*checa se esta logado*/ false ? (
          <LoggedHome />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

// Todas as rotas vão ser tratadas na App.js
export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <AuthRoute exact path="/" Component={LoggedHome} />
        <NonAuthRoute exact path="/" Component={LandingPage} />
        <NonAuthRoute exact path="/loginRegister" Component={LoginRegister} />
        <NonAuthRoute
          exact
          path="/registerStepOne"
          Component={RegisterStepOne}
        />
        <NonAuthRoute
          exact
          path="/registerStepTwo"
          Component={RegisterStepTwo}
        />
        <NonAuthRoute
          exact
          path="/registerStepThreeProfessional"
          Component={RegisterStepThreeProfessional}
        />
        <NonAuthRoute
          exact
          path="/registerStepThreeVictim"
          Component={RegisterStepThreeVictim}
        />
        <NonAuthRoute exact path="/forgotPassword" Component={ForgotPassword} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>
);
