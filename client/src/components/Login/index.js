import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

// Components
import Spinner from '../Spinner'
import { loginUser } from '../../actions/authActions'

class index extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errorLoading: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(userData)
        // pass the state to the actions
        this.props.loginUser(userData, this.props.history)
        // starts the loading
        this.setState({
            errorLoading: true
        })
    }

    componentWillReceiveProps(nextProps) {
        const { errors } = nextProps
        // end the loading
        this.setState({
            errorLoading: errors.loading
        })
    }

    render() {
        return (
            <div className="form form--login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <div
                            className={classnames('invalid-feedback', {
                                'd-block': !_.isEmpty(this.props.errors.login)
                            })}
                        >
                            {this.props.errors.login}
                        </div>
                    </div>

                    <Spinner loading={this.state.errorLoading} />

                    <input
                        type="submit"
                        className="btn btn-primary btn btn-block mt-4"
                        value="Submit"
                    />
                </form>
            </div>
        )
    }
}

index.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

const mapStateToActions = {
    loginUser
}

export default connect(
    mapStateToProps,
    mapStateToActions
)(index)
