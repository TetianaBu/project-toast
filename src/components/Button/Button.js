import React from "react";

import styles from "./Button.module.css";

function Button({ className = "", handleSubmit, ...delegated }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...delegated}
      onClick={(event) => {
        handleSubmit(event);
      }}
    />
  );
}

export default Button;
