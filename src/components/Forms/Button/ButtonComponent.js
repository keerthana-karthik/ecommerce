import React from "react";

import indexClasses from "../../../index.css";

const ButtonComponent = props => (
  <button
    onClick={props.clicked}
    disabled={props.disabled}
    className={[indexClasses.styleButton, indexClasses.styleBlack].join(" ")}>
    {props.children}
  </button>
);

export default ButtonComponent;
