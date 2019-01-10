import { POST_FAVORITE } from '../actions/types'

const initalState = {}

export default function(state = initalState, { type, payload }) {
    switch (type) {
        case POST_FAVORITE:
            return {
                ...state,
                file_id: payload.file_id,
                user_id: payload.user_id
            }
        default:
            return state
    }
}
