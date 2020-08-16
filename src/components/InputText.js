import React from "react";
import PropTypes from "prop-types";

export default function InputText(props) {
  const cssFor = props.error === "error" ? "error" : "";
  return (
    <div className={`input-text ${cssFor}`}>
      <label htmlFor={props.name} className={ props.required ? "required" : "" }>{props.label}</label>
      <input
        id={props.name}
        type={props.type}
        name={props.name}
        required={props.required}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string
};

InputText.defaultProps = {
    type: "text"
}
