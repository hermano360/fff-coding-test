var express = require('express')
const path = require('path')

// Create out app

var app = express()
const PORT = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, '/public')))


app.listen(PORT, () => console.log('Express server is listening on ' + PORT))
