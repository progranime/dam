const express = require('express')
const router = express.Router()
const fs = require('fs')

// Own modules
const fileSystem = require('../../scripts/fileSystem')
const path = 'client/public/images/dam/'
const pathOfImageToUpload = 'client/public/images/images-to-upload/'
const thumbnailDestPath = 'images/thumbnails/'
const date = new Date()
const fullDate = `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()}`

const file = require('../../models/file')

// @router  GET api/file/collectFileData
// @desc    collect the file data specially keywords
// @access  Public
router.get('/collectData', async (req, res) => {
    /*
        Steps
        1. Collect all files/images in the folder
        2. Get the id, keywords of the file
        3. Store the data of the files specially the unique id, keywords
    */

    // get all files in the directory
    let files = await fileSystem.getFiles(pathOfImageToUpload).then(files => {
        return files
    })
    // loop through the object to the keywords
    let fileData = await Object.values(files).map((file, index) => {
        let imgPath = `${pathOfImageToUpload}${file}`
        return fileSystem.getKeywords(imgPath).then(async keywords => {
            let name, image, imageThumbnail, imageDownload, ext
            ext = file
                .substring(file.lastIndexOf('.') + 1, file.length)
                .toLowerCase()
            name = file.replace(`.${ext}`, '')

            // to get the original image that will show to user
            if (ext === 'psd') {
                image = imageThumbnail = 'images/logos/photoshop.png'
            } else if (ext === 'tiff' || ext === 'tif') {
                image = imageThumbnail = 'images/logos/tiff.png'
            } else {
                image = `images/dam/${file}`
                imageThumbnail = `${thumbnailDestPath}${file}`
            }

            // original source of image
            imageDownload = `images/dam/${file}`

            // name, image, image_thumbnail, image_download, keywords, date_created
            return [
                name,
                image,
                imageThumbnail,
                imageDownload,
                keywords,
                fullDate
            ]
        })
    })

    // return the response to the route
    /* Promise.all(fileData).then(data => {
        // store the data to the DB
        let INSERT_DATA = `INSERT INTO file (name, image, image_thumbnail, image_download, keywords, date_created) VALUES ?`

        db.query(INSERT_DATA, [data], (err, result) => {
            if (err) console.log(err)
            res.status(200).json({
                result
            })
        })
    }) */

    Promise.all(fileData).then(async data => {
        const result = await file.store(data)
        return res.json(result)
    })
})

// @router  GET api/file/createThumbnail
// @desc    Create thumbnail for all images
// @access  Public
router.get('/createThumbnail', async (req, res) => {
    /*
        Steps:
        1. Get all files
        2. Create thumbnail for all images
    */
    let improperExtensions = ['psd', 'tiff', 'tif']

    let files = await fileSystem.getFiles(pathOfImageToUpload).then(files => {
        return files
    })

    // loop through to all images to get the file name
    // and create thumbnail
    await Object.values(files).map(file => {
        let imgPath = `${pathOfImageToUpload}${file}`

        let ext = file
            .substring(file.lastIndexOf('.') + 1, file.length)
            .toLowerCase()

        if (!improperExtensions.includes(ext)) {
            // create thumbnail images
            fileSystem.createThumbnail(imgPath)
        }
    })

    await res.json({
        msg: 'Creating thumbnails ...'
    })
})

// @router  GET api/file/getFile/:page
// @desc    Get the files per page
// @access  Public
router.post('/getFile/:page', async (req, res) => {
    let page, searchQuery, userId

    page = req.params.page || 1
    searchQuery = req.body.searchQuery
    userId = req.body.user_id

    const results = await file.get({
        page,
        searchQuery,
        userId
    })

    return res.json(results)
})

// @router  PUT api/file/putKeywords
// @desc    PUT or add keywords to the filename
// @access  Private
router.put('/putKeywords', async (req, res) => {
    let userInput = {
        id: req.body.id,
        path: req.body.path,
        keywords: req.body.keywords
    }

    const result = await file.update(userInput)
    return res.json(result)
})

module.exports = router
