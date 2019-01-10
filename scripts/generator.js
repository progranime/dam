var fs = require('fs')
var path = require('path')

// The zip library needs to be instantiated:
var zip = require('node-zip')()

module.exports = {
    compress: function(results) {
        // You can add multiple files by performing subsequent calls to zip.file();
        // the first argument is how you want the file to be named inside your zip,
        // the second is the actual data:

        results.map(result => {
            let name = result.image.substring(
                result.image.lastIndexOf('/') + 1,
                result.image.length
            )

            zip.file(
                name,
                fs.readFileSync(
                    path.join(__dirname, `../client/public/${result.image}`)
                )
            )
        })

        var data = zip.generate({ base64: false, compression: 'DEFLATE' })

        // it's important to use *binary* encode
        fs.writeFileSync('compressFiles/dam.zip', data, 'binary')
    }
}
