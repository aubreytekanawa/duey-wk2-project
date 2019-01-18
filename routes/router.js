const wall = require('../wall')

const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  res.render('wall', wall)
})

router.get('/payment', (req, res) => {
  res.render('payment')
})

router.post('/', (req, res) => {
  console.log(Object.keys(req.body)[0])
  let id = Object.keys(req.body)[0]
  let brick = getBrickById(id)
  res.redirect('/payment')
})

function getBrickById(id){
  //find the brick using id
}


module.exports = router

