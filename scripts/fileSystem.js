const fs = require('fs')
const exiftool = require('node-exiftool')
const ep = new exiftool.ExiftoolProcess()
const thumb = require('node-thumbnail').thumb

module.exports = {
    getFiles: function(path) {
        return new Promise(resolve => {
            fs.readdir(path, (err, files) => {
                resolve(files)
            })
        })
    },

    getKeywords: function(file) {
        return new Promise(resolve => {
            fs.readFile(file, (err, data) => {
                // getting the keywords of the file
                ep.open()
                    .then(() => ep.readMetadata(file))
                    .then(fileData => {
                        // convert array to string
                        let keywords = fileData.data[0].Keywords
                            ? fileData.data[0].Keywords.toString()
                            : ''
                        resolve(keywords)
                    })
                    .then(() => ep.close())
                    .catch(err => console.log(err))
            })
        })
    },

    postKeywords: function(postData) {
        ep.open()
            .then(() =>
                ep.writeMetadata(`client/public/${postData.path}`, {
                    all: '',
                    'Keywords+': postData.keywords.split(',')
                })
            )
            .then(err => console.log(err))
            .then(() => ep.close())
            .catch(err => console.log(err))
    },

    createThumbnail: function(imagePath) {
        return new Promise(resolve => {
            thumb({
                source: imagePath,
                destination: 'client/public/images/thumbnails/',
                suffix: '',
                width: 1000
            }).then(files => {
                resolve(files)
            })
        })
    }
}
