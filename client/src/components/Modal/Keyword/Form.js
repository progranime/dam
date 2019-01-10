import React from 'react'

const FormKeyword = ({ handleChange, result, putKeywords }) => {
    return (
        <form onSubmit={putKeywords.bind(this, { result })} className="w-100">
            <div className="row">
                <div className="col-20 col-md-16">
                    <textarea
                        name="currentKeywords"
                        id="currentKeywords"
                        rows="3"
                        className="form-control"
                        onChange={handleChange}
                        defaultValue={result.keywords}
                    />
                    <small className="text-danger">
                        Enter your keywords in comma separated. Example (home,
                        shop, beauty)
                    </small>
                </div>

                <div className="col-20 col-md-4 align-self-center">
                    <input
                        type="submit"
                        className="btn btn-primary btn-block"
                        value="Save"
                    />
                </div>
            </div>
        </form>
    )
}

export default FormKeyword
