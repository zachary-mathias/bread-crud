require('dotenv').config()
const express = require('express')
const breadController = require('./controllers/breads')

const app = express()

// middleware
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))