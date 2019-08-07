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
import EditProfile from "./Components/Home/EditProfile";
import Process from "./Components/Home/Process";
import VictimProfile from "./Components/Home/VictimProfile";
import ProfessionalProfile from "./Components/Home/ProfessionalProfile";
import VictimChat from "./Components/Home/VictimChat";
import SideNavBar from "./Components/Home/SideNavBar";

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
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <LandingPage />
        )
      }
    />
  );
};

const NonAuthRoute = function({ Component, ...props }) {
  return <Route {...props} render={() => <Component {...props} />} />;
};

// Todas as rotas vão ser tratadas na App.js
export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <AuthRoute exact path="/loggedHome" Component={LoggedHome} />
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
        <AuthRoute exact path="/editProfile" Component={EditProfile} />
        <AuthRoute exact path="/process" Component={Process} />
        <AuthRoute exact path="/victimProfile" Component={VictimProfile} />
        <AuthRoute exact path="/victimChat" Component={VictimChat} />
        <AuthRoute exact path="/sideNavBar" Component={SideNavBar} />
        <AuthRoute
          exact
          path="/professionalProfile"
          Component={ProfessionalProfile}
        />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>
);
