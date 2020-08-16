import { INPUT_TYPE_TEXT } from "../constants/input-types";
import { INPUT_LABEL_PHONE, INPUT_LABEL_PHONE_SECONDARY } from "../content/input-labels";
import { INPUT_ERROR_PHONE } from "../content/input-errors";

export const phoneField = {
    type: INPUT_TYPE_TEXT,
    label: INPUT_LABEL_PHONE,
    secondaryLabel: INPUT_LABEL_PHONE_SECONDARY,
    name: "phone",
    placeholder: "(XXX)XXX-XXXX",
    validation: {
        description: INPUT_ERROR_PHONE,
        specs: {
            regex: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/,
        }
    }
}