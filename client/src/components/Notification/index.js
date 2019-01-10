import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Index extends Component {
    componentWillReceiveProps(nextProps) {
        const self = this.props
        if (nextProps.showNotification === true) {
            setTimeout(() => {
                self.handleState({
                    showNotification: false
                })
            }, self.duration)
        }
    }

    render() {
        const { classes, message, showNotification } = this.props

        return (
            <div
                className={classnames(`notification ${classes}`, {
                    active: showNotification
                })}
            >
                <p className="notification__message">{message}</p>
            </div>
        )
    }
}

Index.propTypes = {
    message: PropTypes.string.isRequired
}

Index.defaultProps = {
    classes: '',
    message: 'Notification ...',
    showNotification: false,
    duration: 1500
}

export default Index
