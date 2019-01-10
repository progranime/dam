const express = require('express')
const bodyParser = require('body-parser')

// Load routes
const file = require('./routes/api/file')
const download = require('./routes/api/download')
const favorite = require('./routes/api/favorite')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Create routes
app.use('/api/file', file)
app.use('/api/download', download)
app.use('/api/favorite', favorite)

// for deployment purposes
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
