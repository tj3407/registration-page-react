import React from "react";
import PropTypes from "prop-types";

export default function InputRadio(props) {
  const cssFor = props.error === "error" ? "error" : "";
  const cssForRequired = props.required ? "required" : "";

  return (
    <>
      <p className={`${cssFor} ${cssForRequired}`}>{props.label}</p>
      <div className="input-radio">
        {props.selections.map((selection) => {
          return (
            <React.Fragment key={selection.value}>
              <input type={props.type} id={selection.value} name={props.name} value={selection.value} onChange={props.onChange} />
              <label htmlFor={selection.value} >
                <img src={selection.label} alt={selection.value} />
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

InputRadio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  selections: PropTypes.array,
  type: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string
};

InputRadio.defaultProps = {
  type: "radio",
};
