import React from 'react'
import _ from 'lodash'

const Index = ({ results, message }) => {
    return (
        <div>
            {_.isEmpty(results) && (
                <div className="py-4 text-center">{message}</div>
            )}
        </div>
    )
}

Index.defaultProps = {
    message: 'No Results Found!'
}

export default Index
