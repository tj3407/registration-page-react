import React from 'react'
import PropTypes from 'prop-types'
import { ERROR_ALERT_DESCRIPTION } from '../content/input-errors'

export default function Alerts(props) {
    if (!props.alerts.length) return null;

    return (
        <div className="alert-box">
            <p className="alerts">{ERROR_ALERT_DESCRIPTION}</p>
            <ul>
                {props.alerts.map((alert, i) => {
                    return (
                        <li key={`alert-${i}`} className="alerts">{alert}</li>
                    )
                })}
            </ul>
        </div>
    )
}

Alerts.propTypes = {
    alerts: PropTypes.array
}

Alerts.defaultProps = {
    alerts: []
}
