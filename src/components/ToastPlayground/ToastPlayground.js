import React from "react";

import Button from "../Button";
import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [userOption, setUserOption] = React.useState("");
  const [isPopUpShown, setIsPopUpShown] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isPopUpShown && userOption && message) {
      setIsPopUpShown(true);
      return
    }
    window.alert("Message text and type are mandatory");
    setIsPopUpShown(false);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {isPopUpShown && (
        <Toast
          userOption={userOption}
          message={message}
          setUserOption={setUserOption}
          setMessage={setMessage}
          setIsPopUpShown={setIsPopUpShown}
        ></Toast>
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === userOption}
                    onChange={(event) => {
                      setUserOption(event.target.value);
                    }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button handleSubmit={handleSubmit}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
