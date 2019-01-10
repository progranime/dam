import React from 'react'

const Details = ({ result }) => {
    return (
        <div className="card-feature__details">
            <p className="card-feature__title">{result.name}</p>
        </div>
    )
}

export default Details
