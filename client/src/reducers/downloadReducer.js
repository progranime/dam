import { POST_DOWNLOAD, POST_COMPRESS_DOWNLOAD } from '../actions/types'

const initialState = {
    loading: false
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case POST_DOWNLOAD:
            return {
                ...state,
                file_id: payload.file_id
            }
        case POST_COMPRESS_DOWNLOAD:
            return {
                ...state
            }
        default:
            return state
    }
}
