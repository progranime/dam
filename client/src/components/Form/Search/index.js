import React from 'react'
import classnames from 'classnames'
import _ from 'lodash'

import FormInput from '../Input'

const SearchInput = ({
    handleSubmit,
    handleChange,
    searchQuery,
    removeQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-20 col-md-8 offset-md-6 text-center">
                    <h3>DAM</h3>
                    <p>Digital Assets Management</p>

                    <div className="search__group">
                        <FormInput
                            type="search"
                            name="searchQuery"
                            placeholder="Search for photos..."
                            classes="form-control search__input js-search-input"
                            handleChange={handleChange}
                            value={searchQuery}
                        />

                        <input
                            type="button"
                            value="X"
                            className={classnames(
                                'btn btn-default search__remove',
                                {
                                    'd-none': _.isEmpty(searchQuery)
                                }
                            )}
                            onClick={removeQuery}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchInput
