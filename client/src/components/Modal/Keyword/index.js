import React, { Fragment } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import _ from 'lodash'
import Form from './Form'

const ModalKeyword = ({
    showModalKeyword,
    result,
    toggleModal,
    handleChange,
    putKeywords
}) => {
    if (!_.isEmpty(result)) {
        let keywords = result.keywords.split(',').map((keyword, index) => {
            return (
                <a
                    href="#_"
                    className="badge badge--standard"
                    key={index}
                    onClick={toggleModal.bind(this, {
                        result,
                        type: 'keyword',
                        searchKeyword: true,
                        keyword: keyword
                    })}
                >
                    {keyword}
                </a>
            )
        })
        return (
            <Modal
                isOpen={showModalKeyword}
                className="modal-dialog modal-lg"
                toggle={toggleModal.bind(this, {
                    result,
                    type: 'keyword'
                })}
            >
                <ModalHeader
                    toggle={toggleModal.bind(this, {
                        result,
                        type: 'keyword'
                    })}
                >
                    {result.name}
                </ModalHeader>
                <ModalBody>{keywords}</ModalBody>
                <ModalFooter>
                    <Form
                        handleChange={handleChange}
                        result={result}
                        putKeywords={putKeywords}
                    />
                </ModalFooter>
            </Modal>
        )
    }

    return <Fragment />
}

export default ModalKeyword
