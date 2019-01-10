import axios from 'axios'
import {
    GET_FILE,
    GET_CURRENT_FILE,
    GET_MORE_FILE,
    PUT_FILE_KEYWORDS
} from './types'
import store from '../store'

export const getFile = payload => dispatch => {
    const { searchQuery, searchCategory } = payload
    // pass different api based on category
    const url =
        searchCategory === 'all'
            ? '/api/file/getFile/1'
            : '/api/favorite/getFile/1'
    const { id, uniqueId } = store.getState().auth.user

    const axiosOptions = {
        method: 'post',
        url: url,
        data: {
            searchQuery: searchQuery,
            user_id: uniqueId,
            user_name: id
        }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_FILE,
            payload: {
                results: res.data,
                searchQuery: searchQuery
            }
        })
    })
}

// Update the current file data due to actions like INSERT, UPDATE
export const getCurrentFile = payload => dispatch => {
    const { searchQuery, searchCategory, currentPage } = payload
    // pass different api based on category
    const url =
        searchCategory === 'all'
            ? `/api/file/getFile/${currentPage}`
            : `/api/favorite/getFile/${currentPage}`
    const { id, uniqueId } = store.getState().auth.user

    const axiosOptions = {
        method: 'post',
        url: url,
        data: {
            searchQuery: searchQuery,
            user_id: uniqueId,
            user_name: id
        }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_CURRENT_FILE,
            payload: {
                results: res.data,
                searchQuery: searchQuery,
                currentPage: currentPage
            }
        })
    })
}

// Get more file base on page
export const getMoreFile = payload => dispatch => {
    console.log('get more file')
    let { searchQuery, searchCategory, currentPage } = payload

    let nextPage = currentPage + 1
    let { id, uniqueId } = store.getState().auth.user

    // default url when category is all
    let url =
        searchCategory === 'all'
            ? `/api/file/getFile/${nextPage}`
            : `/api/favorite/getFile/${nextPage}`

    const axiosOptions = {
        method: 'post',
        url: url,
        data: {
            searchQuery: searchQuery,
            user_id: uniqueId,
            user_name: id
        }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: GET_MORE_FILE,
            payload: {
                results: res.data,
                searchQuery: searchQuery,
                currentPage: nextPage
            }
        })
    })
}

// Update the keywords of the file
export const putKeywords = payload => dispatch => {
    const { id, path, keywords } = payload

    // default url when category is all
    let url = '/api/file/putKeywords'

    const axiosOptions = {
        method: 'put',
        url: url,
        data: {
            id: id,
            path: path,
            keywords: keywords
        }
    }

    axios(axiosOptions)
        .then(res => {
            dispatch({
                type: PUT_FILE_KEYWORDS,
                payload: {
                    currentKeywords: keywords
                }
            })
        })
        .catch(err => console.log(err))
}
