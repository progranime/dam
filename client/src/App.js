import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
// load styles
import './styles/app.css'
import store from './store'
// load components
import Login from './components/Login'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import ScrollTop from './components/ScrollTop'
// load routes
import Home from './routes/Home'
import Favorite from './routes/Favorite'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/" component={Home} />
                        <PrivateRoute
                            exact
                            path="/favorite"
                            component={Favorite}
                        />
                        <ScrollTop />
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App
