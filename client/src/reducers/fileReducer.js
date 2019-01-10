import {
    GET_FILE,
    GET_CURRENT_FILE,
    GET_MORE_FILE,
    PUT_FILE_KEYWORDS
} from '../actions/types'

const initialState = {
    results: [],
    searchQuery: '',
    loading: false,
    currentKeywords: '',
    currentPage: 1
}

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case GET_FILE:
            return {
                ...state,
                results: payload.results,
                searchQuery: payload.searchQuery
            }
        case GET_CURRENT_FILE:
            return {
                ...state,
                results: payload.results,
                searchQuery: payload.searchQuery,
                currentPage: payload.currentPage
            }
        case GET_MORE_FILE:
            return {
                ...state,
                results: payload.results,
                searchQuery: payload.searchQuery,
                currentPage: payload.currentPage
            }
        case PUT_FILE_KEYWORDS:
            return {
                ...state,
                currentKeywords: payload.currentKeywords
            }
        default:
            return state
    }
}
