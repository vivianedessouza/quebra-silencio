import React, { Component } from "react";
import "./Header.scss";
import Contents from "./HeaderContents";
import NavBar from "./NavBar";
import { Slide } from "react-slideshow-image";
import one from "./../../images/love_hurt.jpg";
import two from "./../../images/cry.jpg";
import three from "../../images/woman.jpg";
import CountUp from "react-countup";

const slideImages = [three, one, two];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};

const countup = {
  className: "account-balance",
  start: 0,
  end: 87.83,
  duration: 5,
  useEasing: true,
  useGrouping: true,
  separator: " ",
  decimals: 4,
  decimal: ".",
  prefix: "",
  suffix: ""
};

const countup2 = {
  className: "account-balance",
  start: 0,
  end: 85.73,
  duration: 15,
  useEasing: true,
  useGrouping: true,
  separator: " ",
  decimals: 2,
  decimal: ".",
  prefix: "",
  suffix: "%"
};

const countup3 = {
  className: "account-balance",
  start: 0,
  end: 43,
  duration: 15,
  useEasing: true,
  useGrouping: true,
  separator: " ",
  decimals: 0,
  decimal: ".",
  prefix: "",
  suffix: "%"
};

const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div
          className="padding"
          style={{ backgroundImage: `url(${slideImages[0]})`, height: "100vh" }}
        >
          <span className="headerContents color-white">
            <p>
              <CountUp {...countup} />
            </p>
            <p>
              Actos criminosos de{" "}
              <span className="color-purple"> violência domêstica </span>
              <br />
              em Portugal, apenas em 2017.
            </p>
          </span>
        </div>
      </div>
      <div className="each-slide">
        <div
          className="padding"
          style={{ backgroundImage: `url(${slideImages[1]})`, height: "100vh" }}
        >
          <span className="headerContents color-white">
            <p>
              <CountUp {...countup2} />
            </p>
            <p>
              Das vítimas são do{" "}
              <span className="color-purple"> gênero feminino.</span>
            </p>
          </span>
        </div>
      </div>
      <div className="each-slide">
        <div
          className="padding"
          style={{ backgroundImage: `url(${slideImages[2]})`, height: "100vh" }}
        >
          <span className="headerContents color-white">
            <p>
              <CountUp {...countup3} />
            </p>
            <p>
              Das pessoas{" "}
              <span className="color-purple">
                {" "}
                vítimas de violência doméstica,{" "}
              </span>
              <br /> possuem entre 26 e 55 anos.
            </p>
          </span>
        </div>
      </div>
    </Slide>
  );
};

export class Header extends Component {
  render() {
    return (
      <header id="home">
        <Slideshow />
        <NavBar />
        <Contents />
      </header>
    );
  }
}

export default Header;
