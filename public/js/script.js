/* eslint-disable no-undef */
import ValidatedTextField from './modules/validatedTextField.js';
import ValidatedEmailField from './modules/validatedEmailField.js';
import SignUpForm from './modules/signUpForm.js';

const firstName = new ValidatedTextField({
  inputFieldClass: '.input-first-name',
  formClass: '.action form',
  errorMessage: 'First Name cannot be empty',
});

const lastName = new ValidatedTextField({
  inputFieldClass: '.input-last-name',
  formClass: '.action form',
  errorMessage: 'Last Name cannot be empty',
});

const password = new ValidatedTextField({
  inputFieldClass: '.input-password',
  formClass: '.action form',
  errorMessage: 'Password cannot be empty',
});

const email = new ValidatedEmailField({
  inputFieldClass: '.input-email',
  formClass: '.action form',
  errorMessage: 'Looks like this is not an email',
});

new SignUpForm({ formClass: '.action form', submitButtonClass: '.action form button' })
  .addFields([firstName, lastName, password, email])
  .start();
