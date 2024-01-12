/* eslint-disable no-undef */

export default class SignUpForm {
  constructor({ formClass, submitButtonClass }) {
    this.form = document.querySelector(formClass);
    this.submit = document.querySelector(submitButtonClass);
    this.fields = [];
  }

  addField(field) {
    this.fields.push(field);
    return this;
  }

  addFields(fieldsIterable) {
    fieldsIterable.forEach((field) => this.addField(field));
    return this;
  }

  registerFields() {
    this.fields.forEach((field) => field.registerEvents());
  }

  registerSubmitButton() {
    this.submit.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.fields.every((field) => field.isValid)) {
        // eslint-disable-next-line no-alert
        alert('User successfully signed up! Press OK to restart the form.');
        window.location.reload();
      }
    });
  }

  start() {
    this.registerFields();
    this.registerSubmitButton();
  }
}
