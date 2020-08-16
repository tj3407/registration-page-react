import { INPUT_TYPE_DATE } from "../constants/input-types";
import { INPUT_LABEL_BIRTHDATE } from "../content/input-labels";
import { INPUT_ERROR_BIRTHDATE } from "../content/input-errors";

export const birthdateField = {
    type: INPUT_TYPE_DATE,
    label: INPUT_LABEL_BIRTHDATE,
    name: "birthdate",
    validation: {
        description: INPUT_ERROR_BIRTHDATE
    }
}