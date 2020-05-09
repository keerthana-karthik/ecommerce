import React from "react";

import indexClasses from "../../../index.css";

const ButtonComponent = props => (
  // <button
  //   disabled={props.disabled}
  //   className={[classes.Button, classes[props.btnType]].join(" ")}
  //   onClick={props.clicked}
  // >
  //   {props.children}
  // </button>
  <button
    onClick={props.clicked}
    disabled={props.disabled}
    className={[indexClasses.styleButton, indexClasses.styleBlack].join(" ")}>
    {props.children}
  </button>
);

export default ButtonComponent;
