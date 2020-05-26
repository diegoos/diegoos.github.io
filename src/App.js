import { hot } from 'react-hot-loader/root';
import React from "react";
import "./App.scss";
import Logo from "./components/Logo";

class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Logo />
      </div>
    );
  }
}

export default hot(App);
