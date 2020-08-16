import { firstNameField, lastNameField } from "../../metadata/name";
import { emailField } from "../../metadata/email";
import { passwordField, confirmPasswordField } from "../../metadata/password";
import { birthdateField } from "../../metadata/birthdate";
import { phoneField } from "../../metadata/phone";
import { countryField } from "../../metadata/country";
import { zipCodeField } from "../../metadata/address";
import { submitButton } from "../../metadata/button";
import usaLogo from "../../assets/ic-usa-desktop@2x.jpg";
import canadaLogo from "../../assets/ic-canada-desktop@2x.jpg";

import { BUTTON_LABEL_REGISTER } from "../../content/button-labels";

const enrollmentFields = [
  {
    ...firstNameField,
    validation: {
      ...firstNameField.validation,
      required: true,
    }
  },
  { ...lastNameField },
  {
    ...emailField,
    validation: {
      ...emailField.validation,
      required: true,
    }
  },
  {
    ...passwordField,
    validation: {
      ...passwordField.validation,
      required: true,
    }
  },
  {
    ...confirmPasswordField,
    validation: {
      ...confirmPasswordField.validation,
      required: true,
    }
  },
  {
    ...birthdateField,
    validation: {
      ...birthdateField.validation,
      required: true,
    }
  },
  { ...phoneField
  },
  {
    ...countryField,
    validation: {
      ...countryField.validation,
      required: true,
    },
    selections: [
      { value: "usa", label: usaLogo},
      { value: "canada", label: canadaLogo}
    ]
  },
  { ...zipCodeField, 
    validation: {
      ...zipCodeField.validation,
      required: true
    }
  }
];

export const enrollmentSubmitButton = {
  ...submitButton,
  name: "registerButton",
  label: BUTTON_LABEL_REGISTER,
}

export default enrollmentFields;
