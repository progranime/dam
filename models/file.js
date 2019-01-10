const db = require('../db')
const fileSystem = require('../scripts/fileSystem')

module.exports = {
    get: function({ page = 1, searchQuery = '', userId = 1 }) {
        let limit = 15 * page,
            offset = 0

        let GET = `SELECT
                f.id, f.name, f.image, f.image_thumbnail, f.image_download, f.keywords, f.date_created,
                IF(fa.file_id IS NOT NULL AND fa.user_id = '${userId}', 1,0) AS is_favorite,
                fa.user_id
            FROM FILE AS f
            LEFT JOIN favorite AS fa
            ON f.id = fa.file_id
            AND fa.user_id = '${userId}'
            WHERE f.keywords LIKE '%${searchQuery}%'
            OR name LIKE '%${searchQuery}%'
            ORDER BY id ASC
            LIMIT ${limit} OFFSET ${offset}`

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: function(data) {
        let INSERT = `INSERT INTO file (name, image, image_thumbnail, image_download,
                        keywords, date_created) VALUES ?`

        return new Promise(resolve => {
            db.query(INSERT, [data], (err, result) => {
                if (err) console.log(err)
                resolve(result)
            })
        })
    },
    update: function(userInput) {
        // Update the keywords of the actual file
        fileSystem.postKeywords(userInput)

        let UPDATE = `UPDATE file SET keywords = ? WHERE id = ?`

        return new Promise(resolve => {
            db.query(
                UPDATE,
                [userInput.keywords, userInput.id],
                (err, result) => {
                    if (err) console.log(err)
                    resolve(result)
                }
            )
        })
    },
    destroy: function() {}
}
