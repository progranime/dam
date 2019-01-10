import React from 'react'

import Header from './Header'
import Container from './Container'
import Details from './Details'

const Card = ({
    toggleModal,
    postDownload,
    postFavorite,
    getDownloadDetail,
    shareLink,
    result
}) => {
    return (
        <div className="card" key={result.id}>
            <Header
                toggleModal={toggleModal}
                postDownload={postDownload}
                postFavorite={postFavorite}
                getDownloadDetail={getDownloadDetail}
                shareLink={shareLink}
                result={result}
            />

            <Container result={result} toggleModal={toggleModal} />

            <Details result={result} />
        </div>
    )
}

export default Card
