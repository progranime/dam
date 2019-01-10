const express = require('express')
const router = express.Router()

const favorite = require('../../models/favorite')

// @router  POST api/favorite/:page
// @desc    Get all the favorites images in DAM per page
// @access  Public
router.post('/getFile/:page', async (req, res) => {
    let page, searchQuery, userId

    page = req.params.page || 1
    searchQuery = req.body.searchQuery
    userId = req.body.user_id

    const result = await favorite.get({
        page,
        searchQuery,
        userId
    })
    return res.json(result)
})

// @router  POST api/favorite/
// @desc    Favorite/Unfavorite the image
// @access  Public
router.post('/', async (req, res) => {
    const result = await favorite.toggleFavorite({
        fileId: req.body.file_id,
        userId: req.body.user_id,
        username: req.body.user_name
    })
    return res.json(result)
})

module.exports = router
