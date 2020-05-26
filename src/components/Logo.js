import React from "react";
import "./Logo.scss"

import logo from "../../img/diegoos.png";

class Logo extends React.Component {
  render () {
    return (
      <div className="do-logo">
        <h1 className="do-logo">
          <img class="do-logo__img" src={logo} title="Diego Oliveira" />
        </h1>
      </div>
    )
  }
}

export default Logo
