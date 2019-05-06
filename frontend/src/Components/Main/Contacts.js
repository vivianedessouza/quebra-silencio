import React, { Component } from "react";
import Form from "./Form";
import SocialMedia from "../Header/SocialMedia";
import Img from "../../images/map.png";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export class Contacts extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  render() {
    return (
      <section id="contacts" className="grid purple-gradient color-white">
        <article className=" padding">
          <Zoom top duration={2000}>
          <h3 className="purple-line">Contactos</h3>
          </Zoom>
          <Fade left duration={3000}>
          <Form />
          </Fade>
          <div className="address">
            <p>Morada: Av. da Quinta Grande, 6</p>
            <p>Contactos Telefónico: +351 915 379 872</p>
            <p>Email: info@quebraosilencio.com</p>
          </div>

          <SocialMedia />
        </article>

        <article className="map">
          <Map className="map-filter" 
            google={this.props.google}
            zoom={14}
            initialCenter={{
              lat: 38.708005,
              lng: -9.149670
            }}
          >

            <Marker
              title={'Quebrar o Silencio'}
              name={'Quebrar o Silencio'} 
         
              />
    
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>

          </Map>
        </article>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCWTxRvZrMNv1TUEyuEYkO3NBoTDLKwp1k')
})(Contacts);