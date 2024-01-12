/* eslint-disable no-undef */
import ValidatedInputField from './validator.js';

class ValidatedTextField extends ValidatedInputField {
  evaluateField() {
    // noinspection JSValidateTypes
    return this.input.value.length === 0 ? this.setErrorState() : this.unsetErrorState();
  }
}

const firstName = new ValidatedTextField({
  inputFieldClass: '.input-first-name',
  formClass: '.action form',
  errorMessage: 'Fist Name cannot be empty',
});
firstName.registerEvents();

const secondName = new ValidatedTextField({
  inputFieldClass: '.input-last-name',
  formClass: '.action form',
  errorMessage: 'Last Name cannot be empty',
});
secondName.registerEvents();

const password = new ValidatedTextField({
  inputFieldClass: '.input-password',
  formClass: '.action form',
  errorMessage: 'Password cannot be empty',
});
password.registerEvents();
