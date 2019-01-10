const db = require('../db/')

module.exports = {
    get: function(id = null) {
        /*
            Steps:
            1. Check if the file already downloaded
            2. If yes increment the count
            3. Else create new entry for that file
        */
        let GET = ''
        if (id) {
            GET = `SELECT * FROM download WHERE file_id = ${id}`
        } else {
            GET = `SELECT * FROM download`
        }

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: function(id) {
        let INSERT = `INSERT INTO download (file_id, download_count) VALUES (${id}, 1)`

        return new Promise(resolve => {
            db.query(INSERT, (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    update: function(id) {
        let UPDATE = `UPDATE download SET download_count = download_count + 1 WHERE file_id = ${id}`

        return new Promise(resolve => {
            db.query(UPDATE, (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    }
}
