import React from "react";

import "./Social.scss"

function Social(props) {
  return (
    <ul className="row ds-social">
      <li>
        <a
          href="https://www.linkedin.com/in/diegoos"
          target="_blank"
          title="My Linkedin"
          className="ds-social__link ds-social__linkedin"
        >
          <span className="icon64 linkedin">Linkedin</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/diegoos"
          target="_blank"
          title="My GitHub Profile"
          className="ds-social__link ds-social__github"
        >
          <span className="icon64 github">Github</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/diegooliveira_s"
          target="_blank"
          title="Tweets tweets..."
          className="ds-social__link ds-social__twitter"
        >
          <span className="icon64 twitter">Twitter</span>
        </a>
      </li>
    </ul>
  );
}

export default Social;
