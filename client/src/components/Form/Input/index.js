import React from 'react'
import PropTypes from 'prop-types'

const Index = ({
    type,
    name,
    id,
    placeholder,
    classes,
    handleChange,
    value
}) => {
    return (
        <div className="form-group">
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className={classes}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
}

Index.defaultProps = {
    type: 'text',
    classes: 'form-control'
}

Index.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Index
