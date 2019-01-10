import React, { Component } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import classnames from 'classnames'
import _ from 'lodash'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            pageYOffset: 0
        }

        this.scrollTop = this.scrollTop.bind(this)
        this.handleWindowScroll = this.handleWindowScroll.bind(this)
    }

    scrollTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    handleWindowScroll() {
        this.setState({
            pageYOffset: window.pageYOffset
        })
    }

    componentDidMount() {
        window.addEventListener(
            'scroll',
            _.debounce(this.handleWindowScroll, 150)
        )
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowScroll)
    }

    render() {
        return (
            <div
                className={classnames(
                    'floating-action floating-action--scroll-top',
                    {
                        active:
                            this.state.pageYOffset >
                            this.props.showScrollInHeight
                    }
                )}
            >
                <div className="floating-action__container">
                    <FaArrowUp onClick={this.scrollTop} className="scroll" />
                </div>
            </div>
        )
    }
}

Index.defaultProps = {
    showScrollInHeight: 800
}

export default Index
