import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export default () => {
    const refreshHistory = 'pushState' in window.history

    return (
        <div className="header__logo">
            <BrowserRouter basename={'/'} forceRefresh={refreshHistory}>
                <Link to="/">
                    <img src="images/logos/music-tribe.png" alt="App logo" />
                </Link>
            </BrowserRouter>
        </div>
    )
}
