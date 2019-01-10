import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BottomScrollListener from 'react-bottom-scroll-listener'

import {
    getFile,
    getCurrentFile,
    getMoreFile,
    putKeywords
} from '../../actions/fileActions'
import {
    postDownload,
    postCompressDownload
} from '../../actions/downloadActions'
import { postFavorite } from '../../actions/favoriteActions'

import FormSearch from '../../components/Form/Search'
import Card from '../../components/Card'
import CardWrapper from '../../components/Card/Wrapper'
import ModalImage from '../../components/Modal/Image'
import ModalKeyword from '../../components/Modal/Keyword'
import PullupAction from '../../components/PullupAction'
import Spinner from '../../components/Spinner'
import Error from '../../components/Error'
import Notification from '../../components/Notification'

class Index extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: '',
            currentKeywords: '',
            result: [],
            downloadDetails: [],
            fileLoading: false,
            showMoreLoading: false,
            downloadLoading: false,
            showModalImage: false,
            showModalKeyword: false,
            showNotification: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleState = state => {
        this.setState(state)
    }

    handleSubmit = e => {
        if (e) e.preventDefault()

        this.props.getFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory
        })

        // start loading the spinner
        this.setState({
            fileLoading: true
        })
    }

    toggleModal = data => {
        if (data.type === 'image') {
            this.setState({
                showModalImage: !this.state.showModalImage,
                result: data.result
            })
        } else {
            // to set the currentKeywords state when the modal is open
            // to avoid having an empty keywords when the user submit it without changing the input
            this.setState({
                showModalKeyword: !this.state.showModalKeyword,
                result: data.result,
                currentKeywords: data.result.keywords
            })
        }

        if (data.searchKeyword) {
            // search for keyword
            this.searchKeyword(data)
        }
    }

    toggleClass = data => {
        let items = document.querySelectorAll(data.target)

        items.forEach(item => {
            item.classList.toggle(data.classToggle)
        })
    }

    onBottom = () => {
        this.props.getMoreFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory,
            currentPage: this.props.file.currentPage
        })

        this.setState({
            showMoreLoading: true
        })
    }

    searchKeyword = async data => {
        let searchInput = document.querySelector('.js-search-input')
        searchInput.value = data.keyword

        await this.setState({
            searchQuery: data.keyword
        })

        await this.props.getFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory
        })
    }

    removeQuery = async () => {
        let searchInput = document.querySelector('.js-search-input')
        searchInput.value = ''

        await this.setState({
            searchQuery: ''
        })
        // search for the default results
        await this.props.getFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory
        })
    }

    postDownload = data => {
        this.props.postDownload({
            file_id: data.id
        })
    }

    postFavorite = async data => {
        await this.props.postFavorite({
            file_id: data.id
        })

        await this.toggleClass({
            target: data.target,
            index: data.index,
            classToggle: data.classToggle
        })

        await this.props.getCurrentFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory,
            currentPage: this.props.file.currentPage
        })
    }

    putKeywords = async (data, e) => {
        e.preventDefault()

        // update the keywords
        await this.props.putKeywords({
            id: data.result.id,
            path: data.result.image,
            keywords: this.state.currentKeywords
        })

        await this.toggleModal({
            result: data.result,
            type: 'keyword'
        })

        await this.props.getCurrentFile({
            searchQuery: this.state.searchQuery,
            searchCategory: this.props.searchCategory,
            currentPage: this.props.file.currentPage
        })
    }

    handleDownload = () => {
        // start the loading of download
        this.setState({
            downloadLoading: true
        })

        this.props.postCompressDownload({
            downloadDetails: this.state.downloadDetails
        })
    }

    getDownloadDetail = data => {
        let downloadDetails = this.state.downloadDetails
        let downloadIndex = downloadDetails.findIndex(downloadDetail => {
            return downloadDetail.id === data.result.id
        })

        // does not exist yet
        if (downloadIndex === -1) {
            downloadDetails.push(data.result)
        } else {
            downloadDetails.splice(downloadIndex, 1)
        }

        this.setState({
            downloadDetails
        })

        // toggle the element
        this.toggleClass({
            target: `.js-toggle-download${data.result.id}`,
            classToggle: 'active'
        })
    }

    removeDownloadDetail = id => {
        let downloadDetails = this.state.downloadDetails
        downloadDetails = downloadDetails.filter(downloadDetail => {
            return downloadDetail.id !== id
        })

        this.setState({
            downloadDetails
        })

        this.toggleClass({
            target: `.js-toggle-download${id}`,
            classToggle: 'active'
        })
    }

    clearDownloadDetail = data => {
        this.setState({
            downloadDetails: []
        })

        // remove the active class to all element
        data.forEach(item => {
            this.toggleClass({
                target: `.js-toggle-download${item.id}`,
                classToggle: 'active'
            })
        })
    }

    shareLink = data => {
        const shareLink = `${window.location.hostname}:${
            window.location.port
        }/${data.result.image}`
        // create temporary textarea and copy the content of it and destroy
        const el = document.createElement('textarea')
        el.value = shareLink
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)

        // show notification
        this.setState({
            showNotification: true
        })
    }

    renderCard = () => {
        const { file } = this.props

        const cards = file.results.map(result => (
            <Card
                key={result.id}
                toggleModal={this.toggleModal}
                postDownload={this.postDownload}
                postFavorite={this.postFavorite}
                getDownloadDetail={this.getDownloadDetail}
                shareLink={this.shareLink}
                result={result}
            />
        ))

        return file.results ? (
            <CardWrapper>{cards}</CardWrapper>
        ) : (
            <Spinner loading={true} />
        )
    }

    // lifecycle hooks
    componentDidMount() {
        // search for the first file results
        this.handleSubmit()
    }

    componentWillReceiveProps(nextProps) {
        const { file, download } = nextProps

        this.setState({
            fileLoading: file.loading,
            showMoreLoading: file.loading,
            downloadLoading: download.loading
        })
    }

    render() {
        return (
            <Fragment>
                <Notification
                    message="Copied to Clipboard!"
                    classes="notification--success"
                    showNotification={this.state.showNotification}
                    handleState={this.handleState}
                />

                <PullupAction
                    handleDownload={this.handleDownload}
                    loading={this.state.downloadLoading}
                    downloadDetails={this.state.downloadDetails}
                    postDownload={this.postDownload}
                    removeDownloadDetail={this.removeDownloadDetail}
                    toggleClass={this.toggleClass}
                    clearDownloadDetail={this.clearDownloadDetail}
                />

                <FormSearch
                    handleState={this.handleState}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    searchQuery={this.state.searchQuery}
                    removeQuery={this.removeQuery}
                />
                <Spinner loading={this.state.fileLoading} />
                <Error results={this.props.file.results} />

                {this.renderCard()}

                <BottomScrollListener onBottom={this.onBottom} />
                <ModalImage
                    showModalImage={this.state.showModalImage}
                    toggleModal={this.toggleModal}
                    result={this.state.result}
                    postDownload={this.postDownload}
                    postFavorite={this.postFavorite}
                    shareLink={this.shareLink}
                />
                <Spinner loading={this.state.showMoreLoading} />
                <ModalKeyword
                    showModalKeyword={this.state.showModalKeyword}
                    toggleModal={this.toggleModal}
                    result={this.state.result}
                    handleChange={this.handleChange}
                    putKeywords={this.putKeywords}
                />
            </Fragment>
        )
    }
}

Index.defaultProps = {
    searchCategory: 'all'
}

Index.propTypes = {
    file: PropTypes.object.isRequired,
    download: PropTypes.object.isRequired,
    getFile: PropTypes.func.isRequired,
    getCurrentFile: PropTypes.func.isRequired,
    getMoreFile: PropTypes.func.isRequired,
    putKeywords: PropTypes.func.isRequired,
    postDownload: PropTypes.func.isRequired,
    postCompressDownload: PropTypes.func.isRequired,
    postFavorite: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    file: state.file,
    download: state.download
})

const mapDispatchToPros = {
    getFile,
    getCurrentFile,
    getMoreFile,
    putKeywords,
    postDownload,
    postCompressDownload,
    postFavorite
}

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(Index)
