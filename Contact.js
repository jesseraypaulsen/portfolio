export function Contact() {
  return (
    <main class="contactPage">
      <h1 class="mdc-typography--headline2 centered">Contact Me</h1>
      <p class="contactText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        cupiditate, pariatur autem deserunt numquam dignissimos amet fuga cumque
        possimus maiores quaerat, alias rem, commodi esse culpa molestiae ut
        aspernatur.
      </p>
      <form class="contactForm">
        <div class="mdc-text-field mdc-text-field--name">
          <input type="text" id="my-name-field" class="mdc-text-field__input" />
          <label class="mdc-floating-label" for="my-name-field">
            Name
          </label>
          <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field mdc-text-field--email">
          <input
            type="text"
            id="my-email-field"
            class="mdc-text-field__input"
          />
          <label class="mdc-floating-label" for="my-email-field">
            Email
          </label>
          <div class="mdc-line-ripple"></div>
        </div>
        <div class="mdc-text-field mdc-text-field--textarea mdc-text-field--message">
          <div class="mdc-text-field-character-counter">0 / 500</div>
          <textarea
            id="textarea"
            class="mdc-text-field__input"
            rows="8"
            cols="40"
            maxLength="500"
          ></textarea>
          <div class="mdc-notched-outline">
            <div class="mdc-notched-outline__leading"></div>
            <div class="mdc-notched-outline__notch">
              <label for="textarea" class="mdc-floating-label">
                Textarea Label
              </label>
            </div>
            <div class="mdc-notched-outline__trailing"></div>
          </div>
        </div>
        <button class="mdc-button mdc-button--raised submitButton">
          <span class="mdc-button__label">Submit</span>
          <i class="material-icons mdc-button__icon" aria-hidden="true">
            favorite
          </i>
        </button>
      </form>
    </main>
  );
}
