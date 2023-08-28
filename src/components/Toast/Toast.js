import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  userOption,
  message,
  setUserOption,
  setMessage,
  setIsPopUpShown,
}) {
  const classNames = `${styles.toast} ${styles[userOption]}`;
  const Icon = ICONS_BY_VARIANT[userOption];

  return (
    <div className={classNames}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button
        className={styles.closeButton}
        onClick={() => {
          setUserOption("");
          setMessage("");
          setIsPopUpShown(false);
        }}
      >
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
