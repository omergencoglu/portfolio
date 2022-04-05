import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import useInput from "../../hooks/use-input";

import SubmitButton from "../UI/SubmitButton";

import styles from "./Contact.module.css";

function Contact() {
  const { resolvedTheme } = useTheme();
  const [buttonState, setButtonState] = useState(null);
  const [mounted, setMounted] = useState(false);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => regex.test(value));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: messageReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (event) => {
    event.preventDefault();

    setButtonState("pending");

    if (!nameIsValid) {
      return;
    }

    if (!emailIsValid) {
      return;
    }
    if (!messageIsValid) {
      return;
    }

    const data = {
      enteredName,
      enteredEmail,
      enteredMessage,
    };

    const response = await fetch("/api/send-email", {
      method: "post",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setButtonState("error");
    } else {
      setButtonState("success");
      nameReset();
      emailReset();
      messageReset();
    }
  };

  const nameInputClasses = nameHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const emailInputClasses = emailHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const messageInputClasses = messageHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section className={styles.contact} data-aos="fade-up">
      {resolvedTheme === "dark" ? (
        <Image
          alt="Dark theme background image"
          src="/contact-dark.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      ) : (
        <Image
          alt="Light theme background image"
          src="/contact-light.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      )}
      <h2 id="contact">Contact</h2>
      <form onSubmit={formSubmissionHandler}>
        <div className={styles.controlGroup}>
          <div className={nameInputClasses}>
            <label htmlFor="name" hidden>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              placeholder="Name"
            />
          </div>

          <div className={emailInputClasses}>
            <label htmlFor="email" hidden>
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email"
            />
          </div>
          <div className={messageInputClasses}>
            <label htmlFor="message" hidden>
              Message
            </label>
            <textarea
              id="message"
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              placeholder="Message"
              rows="10"
            />
          </div>
        </div>
        <div className={styles.formActions}>
          <SubmitButton disabled={!formIsValid} buttonState={buttonState} />
        </div>
      </form>
    </section>
  );
}

export default Contact;
