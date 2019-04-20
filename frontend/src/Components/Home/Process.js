import React, { Component } from "react";
import Icon from "./../common/Icon";
import LoggedHome from "./LoggedHome";
import imageProcess from "./../../images/image_process.jpg";
import { withRouter, Link } from "react-router-dom";

export class Process extends Component {
  render() {
    return (
      <div>
        <LoggedHome />
        <div className="edit-container">
          <h1 className="process-title">Process</h1>
          <div className="process-container">
            <div className="process-state">
              <div className="process-state-one">
                <h2>
                  <Icon className="chevron-right" icon="right" />
                  Estado do Processo
                </h2>
                <p>
                  Ainda não pediu nenhum aconselhamento profissional. Se
                  necessitar de ajuda, peça no campo ao lado.
                </p>
              </div>
              <div className="process-state-two">
                <h2>
                  <Icon className="chevron-right" icon="right" />
                  Estado do Processo
                </h2>
                <p>
                  O seu processo encontra-se em fase de "processamento". Assim
                  que possível, será contactado por um dos nossos
                  profissionais..
                </p>
              </div>
            </div>
            <div className="call-help">
              <h2>
                <Icon className="chevron-right" icon="right" />
                Peça Ajuda...
              </h2>
              <p>
                Necessita de outro tipo de aconselhamento? Peça ajuda a um
                profissional. //refazer copy -- caso tenha pedido já aos dois
                tipos de profissionais, tornar a div do lado esquerdo a 100%,
                com as respectivas margins.
              </p>
              <div className="btn-process-ps">
                <p>
                  Psicologia
                  <Icon className="icon-check" icon="check" />
                </p>
              </div>
              <div className="btn-process-adv">
                <p>
                  Advocacia <Icon className="icon-check" icon="check" />
                </p>
              </div>
              <div className="send-request">
                <p>Enviar Pedido</p>
              </div>
            </div>
          </div>
          <div className="process-management">
            <h2>
              <Icon className="chevron-right" icon="right" />
              Estado do Processo
            </h2>
            <p>O seu processo está a ser gerido por:</p>
            <div className="management-profile profile-spacer">
              <img
                src={imageProcess}
                alt="avatar"
                width="50"
                height="50"
                style={{ borderRadius: "50%", marginTop: "10px" }}
              />

              <div className="personal-profile">
                <h4>Viviane Souza</h4>
                <p>Psicóloga</p>
              </div>
            </div>
            <div className="management-profile profile-spacer ">
              <img
                src={imageProcess}
                alt="avatar"
                width="50"
                height="50"
                style={{ borderRadius: "50%", marginTop: "10px" }}
              />
              <div className="personal-profile">
                <h4>Viviane Silva Souza</h4>
                <p>Advogada</p>
              </div>
            </div>
          </div>
          <div className="process-management">
            <h2>
              <Icon className="chevron-right" icon="right" />
              Estado do Processo
            </h2>
            <p>O seu processo está a ser gerido por:</p>
            <div className="management-profile profile-spacer">
              <img
                src={imageProcess}
                alt="avatar"
                width="50"
                height="50"
                style={{ borderRadius: "50%", marginTop: "10px" }}
              />

              <div className="personal-profile bg-personal-profile">
                <h4>Viviane Souza</h4>
                <p>Psicóloga</p>
              </div>
              <div>
                <p className="process-concluded">Processo concluido</p>
              </div>
            </div>
            <div className="management-profile profile-spacer ">
              <img
                src={imageProcess}
                alt="avatar"
                width="50"
                height="50"
                style={{ borderRadius: "50%", marginTop: "10px" }}
              />
              <div className="personal-profile">
                <h4>Viviane Silva Souza</h4>
                <p>Advogada</p>
              </div>
            </div>
          </div>

          <div className="process-management process-end">
            <h2>
              <Icon className="chevron-right" icon="right" />
              Estado do Processo
            </h2>
            <p>
              O seu processo encontra-se concluído. Obrigada.. Esperemos…
              Classifique os profissionais que lhe acompanharam, através deste
              link. Caso necessite de alguma ajuda extra, preenche novamente os
              campos ao lado.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Process);
