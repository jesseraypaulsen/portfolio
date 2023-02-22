import { useEffect, useRef } from "react";
import { MDCTextField } from "@material/textfield";
import { MDCTextFieldCharacterCounter } from "@material/textfield/character-counter";
import { MDCRipple } from "@material/ripple";
import "../styles/contact.css";

export function Contact({ callback }) {
  const nameField = useRef(null);
  const emailField = useRef(null);
  const messageField = useRef(null);
  const characterCounter = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    new MDCTextField(nameField.current);
    new MDCTextField(emailField.current);
    new MDCTextField(messageField.current);
    new MDCTextFieldCharacterCounter(characterCounter.current);
    new MDCRipple(button.current);
  }, []);

  useEffect(() => {
    // 1. set the height of Main based on the height of this div.
    // 2. scroll to the top of Main.
    callback();
  }, []);

  return (
    <div className="section-contact">
      <h1 className="mdc-typography--headline2 centered section-title">
        Contact Me
      </h1>
      <p className="contactText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        cupiditate, pariatur autem deserunt numquam dignissimos amet fuga cumque
        possimus maiores quaerat, alias rem, commodi esse culpa molestiae ut
        aspernatur.
      </p>
      <form className="contactForm">
        <div className="mdc-text-field mdc-text-field--name" ref={nameField}>
          <input
            type="text"
            id="my-name-field"
            className="mdc-text-field__input"
          />
          <label className="mdc-floating-label" htmlFor="my-name-field">
            Name
          </label>
          <div className="mdc-line-ripple"></div>
        </div>

        <div className="mdc-text-field mdc-text-field--email" ref={emailField}>
          <input
            type="text"
            id="my-email-field"
            className="mdc-text-field__input"
          />
          <label className="mdc-floating-label" htmlFor="my-email-field">
            Email
          </label>
          <div className="mdc-line-ripple"></div>
        </div>

        <div
          className="mdc-text-field mdc-text-field--textarea mdc-text-field--message"
          ref={messageField}
        >
          <div
            className="mdc-text-field-character-counter"
            ref={characterCounter}
          >
            0 / 500
          </div>
          <textarea
            id="textarea"
            className="mdc-text-field__input"
            rows="8"
            cols="40"
            maxLength="500"
          ></textarea>
          <div className="mdc-notched-outline">
            <div className="mdc-notched-outline__leading"></div>
            <div className="mdc-notched-outline__notch">
              <label htmlFor="textarea" className="mdc-floating-label">
                Textarea Label
              </label>
            </div>
            <div className="mdc-notched-outline__trailing"></div>
          </div>
        </div>

        <button
          className="mdc-button mdc-button--raised submitButton"
          ref={button}
        >
          <span className="mdc-button__label">Submit</span>
          <i className="material-icons mdc-button__icon" aria-hidden="true">
            favorite
          </i>
        </button>
      </form>
    </div>
  );
}