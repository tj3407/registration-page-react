import { INPUT_TYPE_TEXT } from "../constants/input-types";
import { INPUT_LABEL_ZIPCODE } from "../content/input-labels";
import { INPUT_ERROR_ZIP } from "../content/input-errors";

export const zipCodeField = {
    type: INPUT_TYPE_TEXT,
    label: INPUT_LABEL_ZIPCODE,
    name: "zipCode",
    validation: {
        description: INPUT_ERROR_ZIP,
        specs: {
            regex: /^[0-9]{5}(?:-[0-9]{4})?$/
        }
    }
}