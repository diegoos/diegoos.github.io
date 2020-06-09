import { hot } from 'react-hot-loader/root';
import React from "react";
import ParticlesBg from 'particles-bg'

import "./App.scss";

import Logo from "./components/Logo";
import Social from "./components/Social";
import About from "./components/About";

function App(props) {
  let config = {
    num: [0, 3],
    rps: 0.5,
    life: [0, 20],
    v: [0, 0],
    alpha: [1, 0],
    scale: [0, 7],
    position: 'screen',
    cross: 'dead',
    g: 0,
    color: 'random',
    rotate: [true]
  };

  return (
    <div className="container">
      <Logo />
      <About />
      <Social />

      <div className="ds-app__bg">
        <ParticlesBg color="#3a3a3a0" num={10} type="custom" bg={true} config={config} />
      </div>
    </div>
  );
}

export default hot(App);
