const wall = require('./wall')

const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  res.render('wall', wall)
})

module.exports = {
  router
}