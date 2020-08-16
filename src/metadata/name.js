import { INPUT_TYPE_TEXT } from "../constants/input-types";
import { INPUT_LABEL_FNAME, INPUT_LABEL_LNAME } from "../content/input-labels";
import { INPUT_ERROR_FNAME, INPUT_ERROR_LNAME } from "../content/input-errors";

export const firstNameField = {
    type: INPUT_TYPE_TEXT,
    label: INPUT_LABEL_FNAME,
    name: "firstName",
    validation: {
        description: INPUT_ERROR_FNAME,
        specs: {
            regex: /^[a-zA-Z]+$/,
            minLength: 1,
            maxLength: 50
        }
    }
}

export const lastNameField = {
    type: INPUT_TYPE_TEXT,
    label: INPUT_LABEL_LNAME,
    name: "lastName",
    validation: {
        description: INPUT_ERROR_LNAME,
        specs: {
            regex: /^[a-zA-Z]+$/,
            minLength: 1,
            maxLength: 50
        }
    }
}