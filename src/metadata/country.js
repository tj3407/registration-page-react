import { INPUT_LABEL_COUNTRY } from "../content/input-labels";
import { INPUT_TYPE_RADIO } from "../constants/input-types";
import { INPUT_ERROR_COUNTRY } from "../content/input-errors";

export const countryField = {
    name: "country",
    label: INPUT_LABEL_COUNTRY,
    type: INPUT_TYPE_RADIO,
    validation: {
        description: INPUT_ERROR_COUNTRY
    }
}