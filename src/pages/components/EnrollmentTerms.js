import React from "react";
import InputCheckbox from "../../components/InputCheckbox";
import {
  ENROLLMENT_TERMS_1,
  ENROLLMENT_TERMS_2,
  ENROLLMENT_TERMS_3,
  ENROLLMENT_TERMS_4,
  ENROLLMENT_NEWSLETTER,
} from "../../content/enrollment-page";
import PropTypes from "prop-types";

export default function EnrollmentTerms(props) {
  const termsStatement = renderTermsStatement();

  function renderTermsStatement() {
    return (
      <p>
        {ENROLLMENT_TERMS_1}
        <a href="https://terms.com" target="_blank" rel="noopener noreferrer">
          {ENROLLMENT_TERMS_2}
        </a>
        {ENROLLMENT_TERMS_3}
        <a href="https://privacy.com" target="_blank" rel="noopener noreferrer">
          {ENROLLMENT_TERMS_4}
        </a>
      </p>
    );
  }

  return (
    <div id="enrollment-terms">
      <InputCheckbox
        label={termsStatement}
        name="terms"
        id="terms"
        onChange={props.onChange}
        cssForTerms={props.cssForTerms}
      />
      <InputCheckbox
        label={<p>{ENROLLMENT_NEWSLETTER}</p>}
        name="newsletter"
        id="newsletter"
        onChange={props.onChange}
      />
    </div>
  );
}

EnrollmentTerms.propTypes = {
  onChange: PropTypes.func,
  cssForTerms: PropTypes.string
};
