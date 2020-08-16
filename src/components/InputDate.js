import React from "react";
import PropTypes from "prop-types";
import {
  INPUT_LABEL_MONTH,
  INPUT_LABEL_DAY,
  INPUT_LABEL_YEAR,
} from "../content/input-labels";
import { ENROLLMENT_HELP_INFO } from "../content/enrollment-page";
import helpIcon from "../assets/ico-help-desktop@2x.png";

export default function InputDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from(Array(31), (_, i) => i + 1);
  const years = Array.from(Array(101), (_, i) => i + 1920);
  const [birthdateValues, setBirthdateValue] = React.useState(null);
  const [showInfo, setShowInfo] = React.useState(false);
  const cssFor = props.error === "error" ? "error" : "";
  const cssForRequired = props.required ? "required" : "";
  const cssForMonth =
    props.status === "submitted" && (!birthdateValues || !birthdateValues.month)
      ? "error"
      : "";
  const cssForDay =
    props.status === "submitted" && (!birthdateValues || !birthdateValues.day)
      ? "error"
      : "";
  const cssForYear =
    props.status === "submitted" && (!birthdateValues || !birthdateValues.year)
      ? "error"
      : "";

  React.useEffect(() => {
    const closeHelpBox = () => {
      setShowInfo(false);
    }
    document.addEventListener('mouseup', closeHelpBox);

    return () => document.removeEventListener('mouseup', closeHelpBox);
  }, []);

  React.useEffect(() => {
    if (birthdateValues) {
      props.onChange({ target: { name: props.name, value: birthdateValues } });
    }
  }, [birthdateValues]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setBirthdateValue({ ...birthdateValues, [name]: value });
  };

  const handleClick = () => {
    setShowInfo(!showInfo);
  }

  return (
    <div>
      <div id="input-date-label">
        <p className={`${cssFor} ${cssForRequired}`}>{props.label}</p>
        <div className="help-icon-container">
          <img src={helpIcon} alt="Birthdate Info" onClick={handleClick} />
          <div className={`help-icon-overlay ${showInfo ? `open` : ``}`}>
            <p>{ENROLLMENT_HELP_INFO}</p>
          </div>
        </div>
      </div>
      <div className={`input-date ${cssFor}`}>
        <>
          <select
            name="month"
            id="month"
            defaultValue="DEFAULT"
            className={cssForMonth}
            onChange={handleChange}
          >
            <option value="DEFAULT" disabled>
              {INPUT_LABEL_MONTH}
            </option>
            {months.map((month, index) => {
              return (
                <option key={`month-${index}`} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
        </>
        <>
          <select
            name="day"
            id="day"
            defaultValue="DEFAULT"
            className={cssForDay}
            onChange={handleChange}
          >
            <option value="DEFAULT" disabled>
              {INPUT_LABEL_DAY}
            </option>
            {days.map((day, index) => {
              return (
                <option key={`day-${index}`} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
        </>
        <>
          <select
            name="year"
            id="year"
            defaultValue="DEFAULT"
            className={cssForYear}
            onChange={handleChange}
          >
            <option value="DEFAULT" disabled>
              {INPUT_LABEL_YEAR}
            </option>
            {years.map((year, index) => {
              return (
                <option key={`year-${index}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </>
      </div>
    </div>
  );
}

InputDate.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  status: PropTypes.string,
};
