import React, { Component } from "react";
import Icon from "./../common/Icon";
import LoggedHome from "./LoggedHome";
import imageProcess from "./../../images/image_process.jpg";
import { withRouter } from "react-router-dom";
import ChatBotMain from "./ChatBotMain";
import { Launcher } from "react-chat-window";

export class VictimChat extends Component {
  render() {
    return (
      <div>
        <LoggedHome />
        <div className="edit-container">
          
          <h1 className="process-title">Mensagens</h1>
          <div className="search-area">
            <Icon className="search" icon="search" />
            <input type="text" placeholder="Search…(por pessoa ou cargo)" />
            <div className="line-below" />
          </div>
          <div className="process-container">
            <ChatBotMain />
            <div className="">
              <div className="process-management-chat">
                <div className="management-profile">
                  <img
                    src={imageProcess}
                    alt="avatar"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="personal-profile ">
                    <h4>Viviane Souza, Marco (…)</h4>
                    <p>Vários</p>
                  </div>
                  <div>
                    <p className="time-information">13:00</p>
                    <p className="mensage-information ">2 Novas Mensagens</p>
                  </div>
                </div>
                <div className="management-profile personal-profile-active">
                  <img
                    src={imageProcess}
                    alt="avatar"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%"}}
                  />
                  <div className="bg-personal-profile">
                    <h4>Viviane Souza</h4>
                    <p>Psicóloga</p>
                  </div>
                  <div>
                    <p className="process-concluded">03 / 01 / 2019</p>
                  </div>
                </div>
                <div className="management-profile ">
                  <img
                    src={imageProcess}
                    alt="avatar"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="personal-profile bg-personal-profile">
                    <h4>Viviane Souza</h4>
                    <p>Psicóloga</p>
                  </div>
                  <div>
                    <p className="archived-message">Mensagen Arquivada</p>
                  </div>
                </div>
                <div className="management-profile">
                  <img
                    src={imageProcess}
                    alt="avatar"
                    width="50"
                    height="50"
                    style={{ borderRadius: "50%" }}
                  />
                  <div className="personal-profile bg-personal-profile">
                    <h4>Viviane Souza</h4>
                    <p>Psicóloga</p>
                  </div>
                  <div>
                    <p className="archived-message">Mensagen Arquivada</p>
                  </div>
                </div>
              </div>
              <div className="process-management process-end">
                <p>
                  Ainda não tem mensagens. Assim que possível, será contactado por
                  um dos nossos profissionais.
            </p>
              </div>
            </div>
            {/* <div className="message-box-email">
              <p className="sender">De:</p>
              <div className="avatar-box-email">
                <img
                  src={imageProcess}
                  alt="avatar"
                  width="30"
                  height="30"
                  style={{
                    borderRadius: "50%",
                    marginTop: "5px",
                    marginLeft: "10px"
                  }}
                />
                <p>Viviane Souza</p>
              </div>
              <div className="avatar-box-email">
                <img
                  src={imageProcess}
                  alt="avatar"
                  width="30"
                  height="30"
                  style={{
                    borderRadius: "50%",
                    marginTop: "5px",
                    marginLeft: "10px"
                  }}
                />
                <p>Viviane Souza</p>
              </div>
              <div className="avatar-mini-box-email">
                <p>...</p>
              </div>
              <Icon className="compress" icon="compress" />
            </div>
            <div className="line-below-chat" />

            <div className="avatar-online">
              <img
                src={imageProcess}
                alt="avatar"
                width="50"
                height="50"
                style={{
                  borderRadius: "50%"
                }}
              />
            </div>
            <div className="online-circle">
              <img src="http://www.clker.com/cliparts/e/E/F/G/p/g/alex-green-circle-md.png" />
            </div>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VictimChat);
