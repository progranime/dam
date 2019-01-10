import React from 'react'
import { FaFileArchive } from 'react-icons/fa'
import classnames from 'classnames'

import Header from './Header'
import List from './List'

const DownloadList = ({
    handleDownload,
    downloadDetails,
    loading,
    postDownload,
    removeDownloadDetail,
    clearDownloadDetail,
    toggleClass
}) => {
    return (
        <div
            className={classnames('pullup-action', {
                active: downloadDetails.length > 0,
                loading: loading
            })}
        >
            <div
                className={classnames('pullup-action__container', {
                    active: downloadDetails.length > 0
                })}
            >
                <Header
                    downloadDetails={downloadDetails}
                    toggleClass={toggleClass}
                />

                <div className="pullup-action__body">
                    <div className="pullup-action__title">
                        <span className="title">Your Selection</span>
                        <a
                            href="#_"
                            className="btn btn-default"
                            onClick={clearDownloadDetail.bind(
                                this,
                                downloadDetails
                            )}
                        >
                            Clear All
                        </a>
                        {!loading ? (
                            <FaFileArchive
                                className="download__compress float-right"
                                onClick={handleDownload}
                            />
                        ) : (
                            <img
                                src="images/icons/spinner2.gif"
                                alt=""
                                className="spinner float-right"
                            />
                        )}
                    </div>

                    {downloadDetails.map(result => {
                        return (
                            <List
                                key={result.id}
                                result={result}
                                removeDownloadDetail={removeDownloadDetail}
                                postDownload={postDownload}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default DownloadList
