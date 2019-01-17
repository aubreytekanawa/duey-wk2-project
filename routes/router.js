const wall = require('./wall')

const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  res.render('wall', wall)
})

router.get('/payment', (req, res) => {
  res.render('payment', payment)
})

module.exports = {
  router
}