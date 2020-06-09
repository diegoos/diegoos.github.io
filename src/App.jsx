import { hot } from 'react-hot-loader/root';
import React from "react";
import ParticlesBg from 'particles-bg'

import "./App.scss";

import Logo from "./components/Logo";
import Social from "./components/Social";
import About from "./components/About";

function App(props) {
  return (
    <div className="container">
      <Logo />
      <About />
      <Social />

      <div className="ds-app__bg">
        <ParticlesBg color="#dbdbdb" num={50} type="cobweb" bg={true} />
      </div>
    </div>
  );
}

export default hot(App);
