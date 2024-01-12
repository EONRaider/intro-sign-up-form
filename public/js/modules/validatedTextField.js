// noinspection JSValidateTypes

import ValidatedInputField from './validatedInputField.js';

export default class ValidatedTextField extends ValidatedInputField {
  evaluateField() {
    return this.input.value.length === 0 ? this.setErrorState() : this.unsetErrorState();
  }
}
