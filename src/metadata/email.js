import { INPUT_TYPE_EMAIL } from "../constants/input-types";
import { INPUT_LABEL_EMAIL } from "../content/input-labels";
import { INPUT_ERROR_EMAIL } from "../content/input-errors";

export const emailField = {
    type: INPUT_TYPE_EMAIL,
    label: INPUT_LABEL_EMAIL,
    name: "email",
    validation: {
        description: INPUT_ERROR_EMAIL,
        specs: {
            regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        }
    }
}