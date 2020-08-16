import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    return (
        <div>
            <input type={props.type} name={props.name} value={props.label} onClick={props.onClick} />
        </div>
    )
}

Button.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func
}
