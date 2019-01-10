import React, { Fragment } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import ProgressiveImage from 'react-progressive-image-loading'
import classnames from 'classnames'
import _ from 'lodash'
import { FaHeart, FaDownload, FaShareAlt } from 'react-icons/fa'

const ModalImage = ({
    showModalImage,
    toggleModal,
    result,
    postDownload,
    postFavorite,
    shareLink
}) => {
    return !_.isEmpty(result) ? (
        <Modal
            isOpen={showModalImage}
            className="modal-dialog modal-lg modal--photo"
            toggle={toggleModal.bind(this, {
                result,
                type: 'image'
            })}
        >
            <ModalHeader
                toggle={toggleModal.bind(this, {
                    result,
                    type: 'image'
                })}
            />
            <ModalBody>
                <a
                    href={result.image}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ProgressiveImage
                        preview={result.image_thumbnail}
                        src={result.image}
                        render={(src, style) => (
                            <div
                                className="modal-bg-image"
                                style={Object.assign(style, {
                                    backgroundImage: `url(${src})`
                                })}
                            />
                        )}
                    />
                </a>

                <div className="details">
                    <div className="details__info">
                        <h4 className="d-inline">{result.name}</h4>

                        <button className="btn btn-default btn--flat mx-1">
                            <FaShareAlt
                                onClick={shareLink.bind(this, {
                                    result
                                })}
                            />
                        </button>

                        <a
                            href={result.image}
                            className="btn btn-primary btn--flat border-0 mx-2"
                            download
                            onClick={postDownload.bind(this, {
                                id: result.id
                            })}
                        >
                            <FaDownload />
                        </a>

                        <button
                            id="jsFavorite"
                            className={classnames(
                                'btn btn-default btn--flat favorite',
                                {
                                    active: result.is_favorite
                                }
                            )}
                            onClick={postFavorite.bind(this, {
                                id: result.id,
                                target: '#jsFavorite',
                                classToggle: 'active'
                            })}
                        >
                            <FaHeart /> {/*result.favorite_count */}
                        </button>
                        <hr />
                        {result.keywords.split(',').map((keyword, index) => {
                            return (
                                <a
                                    href="#_"
                                    className="badge badge--standard"
                                    key={index}
                                    onClick={toggleModal.bind(this, {
                                        result,
                                        type: 'image',
                                        searchKeyword: true,
                                        keyword: keyword
                                    })}
                                >
                                    {keyword}
                                </a>
                            )
                        })}
                    </div>
                    <div className="details__action" />
                </div>
            </ModalBody>
        </Modal>
    ) : (
        <Fragment />
    )
}

export default ModalImage
