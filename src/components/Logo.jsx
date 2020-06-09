import React from "react";

import "./Logo.scss";

function Logo(props) {
  return (
    <div className="row ds-logo">
      <div className="ds-logo__presentation">
        Oi, eu sou
      </div>

      <h1 className="ds-logo__title">
        Diego <br /> Oliveira
      </h1>
    </div>
  )
}

export default Logo
