import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImage from 'react-progressive-image-loading'

const Container = ({ result, toggleModal }) => {
    return (
        <div className="card__container">
            <ProgressiveImage
                preview={result.image_thumbnail}
                src={result.image_thumbnail}
                render={(src, style) => (
                    <div
                        className="card__img-holder"
                        onClick={toggleModal.bind(this, {
                            result,
                            type: 'image'
                        })}
                        style={Object.assign(style, {
                            backgroundImage: `url(${src})`
                        })}
                    />
                )}
            />
        </div>
    )
}

Container.propTypes = {
    result: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired
}

export default Container
