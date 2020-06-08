import { hot } from 'react-hot-loader/root';
import React from "react";

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
    </div>
  );
}

export default hot(App);
