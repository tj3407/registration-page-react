import React from "react";
import enrollmentFields, {
  enrollmentSubmitButton,
} from "./metadata/enrollmentFields";
import EnrollmentHeader from "./components/EnrollmentHeader";
import {
  ENROLLMENT_DESCRIPTION,
  ENROLLMENT_REQUIRED_FIELDS,
} from "../content/enrollment-page";
import InputText from "../components/InputText";
import Button from "../components/Button";
import EnrollmentTerms from "./components/EnrollmentTerms";
import InputRadio from "../components/InputRadio";
import Alerts from "../components/Alerts";
import { TERMS_REQUIRED_ERROR } from "../content/input-errors";
import InputDate from "../components/InputDate";

export default function EnrollmentLayout() {
  const [status, setStatus] = React.useState("idle");
  const [fields, setFields] = React.useState(enrollmentFields);
  const [
    termsNewsletterSelection,
    setTermsNewsletterSelection,
  ] = React.useState({
    terms: { value: null, status: "valid" },
    newsletter: { value: null, status: "valid" },
  });
  const alerts = React.useRef([]);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "terms" || name === "newsletter") {
      // Toggle value of terms and newsletter on each click
      setTermsNewsletterSelection({
        ...termsNewsletterSelection,
        [name]: {
          ...termsNewsletterSelection[name],
          value: !termsNewsletterSelection[name].value,
        },
      });
      return false;
    }

    const fieldIndex = fields.findIndex((field) => field.name === name);
    const field = fields[fieldIndex];
    field.value = value;

    // Validate birthdate field
    if (name === "birthdate") {
      const { month, day, year } = value;
      field.value["month"] = month;
      field.value["day"] = day;
      field.value["year"] = year;

      return false;
    }

    // Update confirm password validation specs
    if (name === "password") {
      const confirmPasswordFieldIndex = fields.findIndex(
        (field) => field.name === "confirmPassword"
      );
      const confirmPasswordField = fields[confirmPasswordFieldIndex];
      const { validation } = confirmPasswordField;

      if (validation.specs) {
        validation.specs.equalTo = value;
      } else {
        validation["specs"] = { equalTo: value };
      }
    }
  };

  const handleBlur = (event) => {
    const { value, name } = event.target;
    const fieldIndex = fields.findIndex((field) => field.name === name);
    const field = fields[fieldIndex];

    // No action required if no validation specified for field
    if (!field.validation || !field.validation.specs) return;

    const { specs } = field.validation;

    const { regex, minLength, maxLength, equalTo } = specs;

    if (name === "confirmPassword" && value !== equalTo) {
      field.status = "error";
      return false;
    }

    // Check if regex, minLength and maxLength validation passes
    if (
      (regex && !regex.test(value)) ||
      (minLength && value.length < minLength) ||
      (maxLength && value.length > maxLength)
    ) {
      field.status = "error";
    }
  };

  const validateInput = () => {
    setStatus("pending");
    alerts.current = [];

    // Iterate through enrollment fields and validate against validation specs
    // and required attributes
    const validatedFields = fields.map((field) => {
      field.status = "valid";
      if (!field.validation) return field;
      const { value, name } = field;
      const { required, specs, description } = field.validation;

      // Validation for confirm password field
      if (name === "confirmPassword") {
        const passwordFieldIndex = fields.findIndex(
          (field) => field.name === "password"
        );
        const passwordField = fields[passwordFieldIndex];
        const passwordValue = passwordField.value;

        if (passwordValue && passwordValue !== value) {
          field.status = "error";
          alerts.current.push(description);
          return field;
        }
      }

      // Validation for birthdate field
      if (name === "birthdate" && value) {
        if (value["month"] !== undefined && value["day"] !== undefined && value["year"] !== undefined) {
          field.status = "valid";
        } else {
          field.status = "error";
          alerts.current.push(description);
        }

        return field;
      }

      // Check if field is required and set error right away
      if (required && !value) {
        field.status = "error";
        alerts.current.push(description);
        return field;
      }

      // No action needed if field is not required and no value
      if (!required && !value) return field;

      // Check if validation specs are present
      if (!specs) return field;

      const { regex, minLength, maxLength } = specs;

      if (
        (regex && !regex.test(value)) ||
        (minLength && value.length < minLength) ||
        (maxLength && value.length > maxLength)
      ) {
        field.status = "error";
        alerts.current.push(description);
      }

      return field;
    });

    if (termsNewsletterSelection["terms"].value !== true) {
      setTermsNewsletterSelection({
        ...termsNewsletterSelection,
        terms: { ...termsNewsletterSelection["terms"], status: "error" },
      });
      alerts.current.push(TERMS_REQUIRED_ERROR);
    } else {
      setTermsNewsletterSelection({
        ...termsNewsletterSelection,
        terms: { ...termsNewsletterSelection["terms"], status: "valid" },
      });
    }

    setFields(validatedFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Clear alerts array first
    alerts.current = [];

    try {
      await validateInput();
      setStatus("submitted");
    } catch (error) {}
  };

  const cssFor = alerts.current.length ? "error" : "";
  const cssForTerms =
    termsNewsletterSelection["terms"].status === "error"
      ? "error"
      : "";

  return (
    <div>
      <EnrollmentHeader />
      <div id="enrollment-main">
        <h2>{ENROLLMENT_DESCRIPTION}</h2>
        <form noValidate>
          <div id="enrollment-form">
            <p className={cssFor}>{ENROLLMENT_REQUIRED_FIELDS}</p>
            {fields.map((field, index) => {
              if (field.name !== "country" && field.name !== "birthdate") {
                return (
                  <InputText
                    key={`enrollment-${index}`}
                    name={field.name}
                    label={field.label}
                    secondaryLabel={field.secondaryLabel}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.validation && field.validation.required}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={field.status}
                  />
                );
              } else if (field.name === "country") {
                return (
                  <InputRadio
                    key={`enrollment-${field.name}`}
                    selections={field.selections}
                    onChange={handleChange}
                    label={field.label}
                    name={field.name}
                    required={field.validation && field.validation.required}
                    error={field.status}
                  />
                );
              } else {
                return (
                  <InputDate
                    key={`enrollment-${field.name}`}
                    name={field.name}
                    error={field.status}
                    required={field.validation && field.validation.required}
                    label={field.label}
                    onChange={handleChange}
                    status={status}
                  />
                )
              }
            })}
          </div>
          <div>
            <EnrollmentTerms
              onChange={handleChange}
              cssForTerms={cssForTerms}
            />
            <Button
              name={enrollmentSubmitButton.name}
              label={enrollmentSubmitButton.label}
              type={enrollmentSubmitButton.type}
              onClick={handleSubmit}
            />
          </div>
        </form>
        {status === "submitted" && <Alerts alerts={alerts.current} />}
      </div>
    </div>
  );
}
