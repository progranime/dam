import axios from 'axios'
import config from '../config/keys'
import { saveState } from '../store/localStorage'
import _ from 'lodash'

// Login user
export const loginUser = (userData, history) => dispatch => {
    const axiosOptions = {
        method: 'post',
        url: config.API.LDAP,
        data: { name: userData.email, pwd: userData.password },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-DreamFactory-Application-Name': 'mg-dbc-app'
        }
    }

    axios(axiosOptions)
        .then(res => {
            // Check if user exists
            if (!_.isEmpty(res.data.id)) {
                let userData = {
                    uniqueId: res.data.uniqueId,
                    id: res.data.id,
                    name: res.data.name,
                    jobTitle: res.data.jobTitle,
                    location: res.data.location
                }
                // add user data to localStorage
                saveState(config.sessionName, userData)

                // redirect the user to home page
                // history.push('/home')
                window.location.href = '/'
            } else {
                console.log('login failed')
                // dispatch an error action
                dispatch({
                    type: 'GET_ERROR',
                    payload: {
                        login: 'User does not exists!'
                    }
                })
            }
        })
        .catch(err => console.log(err))
}

// Logout user
export const logoutUser = () => dispatch => {
    // remove the localStorage
    localStorage.removeItem(config.sessionName)
    // redirect the user to login page
    window.location.href = '/login'
}
