import { INPUT_TYPE_PASSWORD } from "../constants/input-types";
import { INPUT_LABEL_PASSWORD, INPUT_LABEL_CONFIRM_PASSWORD } from "../content/input-labels";
import { INPUT_ERROR_PASSWORD_MISMATCH, INPUT_ERROR_PASSWORD } from "../content/input-errors";

export const passwordField = {
    type: INPUT_TYPE_PASSWORD,
    label: INPUT_LABEL_PASSWORD,
    name: "password",
    validation: {
        description: INPUT_ERROR_PASSWORD,
        specs: {
            minLength: 8,
            maxLength: 16
        }
    }
}

export const confirmPasswordField = {
    type: INPUT_TYPE_PASSWORD,
    label: INPUT_LABEL_CONFIRM_PASSWORD,
    name: "confirmPassword",
    validation: {
        description: INPUT_ERROR_PASSWORD_MISMATCH
    }
}