import React from 'react'
import { FaHeart, FaDownload, FaEdit, FaShareAlt } from 'react-icons/fa'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const Header = ({
    toggleModal,
    postDownload,
    postFavorite,
    getDownloadDetail,
    shareLink,
    result
}) => {
    return (
        <div className="card__header">
            <span
                data-id={result.id}
                id={`add${result.id}`}
                onClick={getDownloadDetail.bind(this, {
                    result
                })}
                className={`js-toggle-download${result.id} cross`}
            >
                <span className="cross__indicator" />
            </span>
            <div className="float-right">
                <FaShareAlt
                    onClick={shareLink.bind(this, {
                        result
                    })}
                />

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
                <FaEdit
                    onClick={toggleModal.bind(this, {
                        result,
                        type: 'keyword'
                    })}
                />
                <FaHeart
                    id={`jsFavorite${result.id}`}
                    className={classnames('favorite', {
                        active: result.is_favorite
                    })}
                    onClick={postFavorite.bind(this, {
                        id: result.id,
                        target: `#jsFavorite${result.id}`,
                        classToggle: 'active'
                    })}
                />
            </div>
        </div>
    )
}

Header.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    postDownload: PropTypes.func.isRequired,
    postFavorite: PropTypes.func.isRequired,
    getDownloadDetail: PropTypes.func.isRequired,
    shareLink: PropTypes.func.isRequired,
    result: PropTypes.object.isRequired
}

export default Header
