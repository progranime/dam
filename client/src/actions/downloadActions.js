import axios from 'axios'
import { POST_DOWNLOAD, POST_COMPRESS_DOWNLOAD } from './types'

// monitor the download of the file
export const postDownload = payload => dispatch => {
    const { file_id } = payload

    const axiosOptions = {
        method: 'post',
        url: '/api/download/',
        data: {
            file_id: file_id
        }
    }

    axios(axiosOptions).then(res => {
        dispatch({
            type: POST_DOWNLOAD,
            payload: {
                file_id
            }
        })
    })
}

export const postCompressDownload = payload => async dispatch => {
    const { downloadDetails } = payload

    const axiosOptions = {
        method: 'post',
        url: '/api/download/compressDownload',
        data: {
            downloadDetails
        }
    }
    axios(axiosOptions).then(res => {
        // workaround because res.download in express is not working
        window.location.href = 'http://localhost:5000/api/download/downloadFile'

        dispatch({
            type: POST_COMPRESS_DOWNLOAD,
            payload: {
                downloadDetails
            }
        })
    })
}
