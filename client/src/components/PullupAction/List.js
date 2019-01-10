import React from 'react'
import PropTypes from 'prop-types'
import { FaDownload } from 'react-icons/fa'

const List = ({ result, removeDownloadDetail, postDownload }) => {
    return (
        <div className="pullup-action__list">
            <img src={result.image_thumbnail} alt="" />
            {result.name}
            <div className="float-right">
                <a
                    href={result.image_download}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    onClick={postDownload.bind(this, {
                        id: result.id
                    })}
                >
                    <FaDownload />
                </a>
                <span
                    onClick={removeDownloadDetail.bind(this, result.id)}
                    className={`js-toggle-download${result.id} cross active`}
                >
                    <span className="cross__indicator" />
                </span>
            </div>
        </div>
    )
}

List.propTypes = {
    result: PropTypes.object.isRequired,
    removeDownloadDetail: PropTypes.func.isRequired,
    postDownload: PropTypes.func.isRequired
}

export default List
