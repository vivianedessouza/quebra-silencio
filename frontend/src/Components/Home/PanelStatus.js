import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class PanelStatus extends Component {
  doLogout = () => {
    localStorage.clear();
  };

  render() {
    return (
      <div className="toggle-container">
        <ul>
          <li>
            Status <span className="online">online</span>{" "}
            <div className="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitchOn"
                checked
              />
              <label className="onoffswitch-label" for="myonoffswitch">
                <span className="onoffswitch-inner" />
                <span className="onoffswitch-switch" />
              </label>
            </div>
          </li>
          <li className="space-item">
            Status{" "}
            <span className="offline">
              offline{" "}
              <div className="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  className="onoffswitch-checkbox"
                  id="myonoffswitchOff"
                  checked
                />
                <label className="onoffswitch-label" for="myonoffswitch">
                  <span className="onoffswitch-inner" />
                  <span className="onoffswitch-switch" />
                </label>
              </div>
            </span>
          </li>
          <li>
            Tema claro
            <div className="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitchLight"
                checked
              />
              <label className="onoffswitch-label" for="myonoffswitch">
                <span className="onoffswitch-inner" />
                <span className="onoffswitch-switch" />
              </label>
            </div>
          </li>
          <li className="space-item">
            Tema Escuro
            <div className="onoffswitch">
              <input
                type="checkbox"
                name="onoffswitch"
                className="onoffswitch-checkbox"
                id="myonoffswitchDark"
                checked
              />
              <label className="onoffswitch-label" for="myonoffswitch">
                <span className="onoffswitch-inner" />
                <span className="onoffswitch-switch" />
              </label>
            </div>
          </li>
          <hr />
          <li className="edit-item">
            <Link to="/editProfile">Editar Perfil</Link>
          </li>
          <hr />
          <li className="edit-item">
            <a href="#" onClick={() => this.doLogout()}>
              Terminar sessão
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(PanelStatus);
