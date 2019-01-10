import React from 'react'

const Index = ({ loading, message }) => {
    return (
        <div>
            {loading && (
                <div className="text-center">
                    <img
                        src="/images/icons/spinner.gif"
                        alt=""
                        style={{ width: '50px' }}
                    />
                    <span className="ml-4">{message}</span>
                </div>
            )}
        </div>
    )
}

Index.defaultProps = {
    loading: false,
    message: 'Loading'
}

export default Index
