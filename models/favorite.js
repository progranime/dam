const db = require('../db')
const _ = require('lodash')

module.exports = {
    get: function({ page = 1, searchQuery = '', userId = 1 }) {
        let limit = 15 * page,
            offset = 0

        let GET = `SELECT f.id, f.name, f.image, f.image_thumbnail, f.image_download, f.keywords, f.date_created,
                    IF(fa.file_id IS NOT NULL, 1,0) AS is_favorite
                FROM FILE AS f
                LEFT JOIN favorite AS fa
                ON f.id = fa.file_id
                WHERE fa.user_id = '${userId}'
                AND (keywords LIKE '%${searchQuery}%'
                OR name LIKE '%${searchQuery}%')
                ORDER BY id ASC
                LIMIT ${limit} OFFSET ${offset}`

        return new Promise(resolve => {
            db.query(GET, (err, results) => {
                if (err) console.log(err)
                resolve(results)
            })
        })
    },
    store: function() {},
    update: function() {},
    destroy: function() {},
    toggleFavorite: function({ fileId, userId, username }) {
        /*
            1. Check if the user already favorited the image
            2. If yes unfavorite / delete the entry to favorite table
            3. Else favorite / add entry to the favorite table
        */

        let IS_FAVORITE = `SELECT * FROM favorite WHERE file_id = '${fileId}' AND user_id = '${userId}'`

        let FAVORITE_IMAGE = `INSERT INTO favorite (file_id, user_id, user_name) VALUES (${fileId}, '${userId}', '${username}')`

        let UNFAVORITE_IMAGE = `DELETE FROM favorite WHERE file_id = '${fileId}' AND user_id = '${userId}'`

        return new Promise(resolve => {
            db.query(IS_FAVORITE, (err, result) => {
                if (err) console.log(err)

                if (_.isEmpty(result)) {
                    // favorite the image
                    db.query(FAVORITE_IMAGE, (err, result) => {
                        if (err) console.log(err)
                        resolve(result)
                    })
                } else {
                    // unfavorite the image
                    db.query(UNFAVORITE_IMAGE, (err, result) => {
                        if (err) console.log(err)
                        resolve(result)
                    })
                }
            })
        })
    }
}
