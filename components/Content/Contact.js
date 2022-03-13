import useInput from "../../hooks/use-input";

import styles from "./Contact.module.css";

function Contact() {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => regex.test(value));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid) {
      return;
    }
    if (!lastNameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const firstNameInputClasses = firstNameHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const lastNameInputClasses = lastNameHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  const emailInputClasses = emailHasError
    ? `${styles.formControl} ${styles.invalid}`
    : `${styles.formControl}`;

  return (
    <section className={styles.contact}>
      <h2 id="contact">Contact</h2>
      <form onSubmit={formSubmissionHandler}>
        <div className={styles.controlGroup}>
          <div className={firstNameInputClasses}>
            <label htmlFor="fistName" hidden>
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
          </div>
          <div className={lastNameInputClasses}>
            <label htmlFor="lastName" hidden>
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
          </div>
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
          />
        </div>
        <div className={styles.formActions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
