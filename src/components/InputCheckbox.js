import React from "react";
import PropTypes from "prop-types";

export default function InputCheckbox(props) {
  return (
    <div className={`input-checkbox ${props.cssForTerms}`}>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

InputCheckbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  cssForTerms: PropTypes.string
};

InputCheckbox.defaultProps = {
  type: "checkbox",
};
