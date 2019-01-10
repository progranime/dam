import React, { Component } from 'react'
import DamSearch from '../containers/DamSearch'

class Favorite extends Component {
    render() {
        return (
            <div className="main-container">
                <h2>Favorite</h2>
                <DamSearch searchCategory="favorite" />
            </div>
        )
    }
}

export default Favorite
