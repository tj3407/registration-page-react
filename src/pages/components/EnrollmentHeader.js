import React from 'react';
import logo from "../../assets/logo-desktop.svg";
import { ENROLLMENT_HEADER } from "../../content/enrollment-page";

function EnrollmentHeader() {
    return (
        <>
            <div id="enrollment-logo">
                <img src={logo} alt="My Company Logo" />
            </div>
            <div id="enrollment-header">
                <h1>{ ENROLLMENT_HEADER }</h1>
            </div>
        </>
    )
}

export default React.memo(EnrollmentHeader);
