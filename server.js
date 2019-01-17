const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes/router')

const server = express()

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: false}))

//ROUTES
server.use('/', routes)

module.exports = server