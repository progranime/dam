import { POST_FAVORITE } from './types'
import axios from 'axios'
import store from '../store'

// favorite/unfavorite the image
export const postFavorite = payload => dispatch => {
    const { file_id } = payload
    // get user unique id
    let { id, uniqueId } = store.getState().auth.user

    const axiosOptions = {
        method: 'post',
        url: '/api/favorite/',
        data: {
            file_id,
            user_id: uniqueId,
            user_name: id
        }
    }

    axios(axiosOptions).then(res => {
        // dispatch an action
        dispatch({
            type: POST_FAVORITE,
            payload: {
                file_id,
                user_id: uniqueId,
                user_name: id
            }
        })
    })
}
