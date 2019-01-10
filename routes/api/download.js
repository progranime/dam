const express = require('express')
const router = express.Router()
const _ = require('lodash')

const db = require('../../db/')
const generator = require('../../scripts/generator')
const download = require('../../models/download')

// @router  POST api/download
// @desc    Increment download count
// @access  Public
router.post('/', async (req, res) => {
    /*
        Steps:
        1. Check if the file already downloaded
        2. If yes increment the count
        3. Else create new entry for that file
    */
    let result
    const id = req.body.file_id
    const hasDownload = await download.get(id)

    if (_.isEmpty(hasDownload)) {
        // create new entry for the downloaded file
        result = await download.store(id)
    } else {
        // increment the download count
        result = await download.update(id)
    }

    return res.json(result)
})

// @router  POST api/download/compressDownload
// @desc    Compress or zip files
// @access  Public
router.post('/compressDownload', (req, res) => {
    const downloadDetails = req.body.downloadDetails

    // compress the files
    generator.compress(downloadDetails)

    // loop through
    // increment the download count of the images
    downloadDetails.map(async downloadDetail => {
        let { id } = downloadDetail
        let hasDownload = await download.get(id)

        if (_.isEmpty(hasDownload)) {
            // create new entry for the downloaded file
            download.store(id)
        } else {
            // increment the download count
            download.update(id)
        }
    })

    res.json({
        msg: 'compressing the files'
    })
})

// @router  POST api/download/downloadFile
// @desc    Link to download the file to the client side
// @access  Public
router.get('/downloadFile', (req, res) => {
    let file = 'compressFiles/dam.zip'
    res.download(file) // Set disposition and send it.
})

module.exports = router
