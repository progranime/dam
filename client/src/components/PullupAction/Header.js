import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ downloadDetails, toggleClass }) => {
    return (
        <div
            className="pullup-action__header"
            onClick={toggleClass.bind(this, {
                target: '.pullup-action__container',
                classToggle: 'active'
            })}
        >
            <div className="download-count">{downloadDetails.length}</div>
            <span>Asset{downloadDetails.length > 1 && 's'} Selected</span>
        </div>
    )
}

Header.propTypes = {
    downloadDetails: PropTypes.array.isRequired,
    toggleClass: PropTypes.func.isRequired
}

export default Header
