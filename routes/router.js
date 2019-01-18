const wall = require('../wall')

const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/', (req, res) => {
  res.render('wall', wall)
})

router.get('/payment/:id', (req, res) => {

  let id = req.params.id
  let brick = getBrickById(id)
  console.log(brick)
  res.render('payment', brick)
})

router.post('/payment/:id', (req,res) => {
  let id = req.params.id
  let brick = getBrickById(id)
  brick.purchased = true
  res.redirect('/')
})

router.post('/', (req, res) => {
  console.log(Object.keys(req.body)[0])
  let id = Object.keys(req.body)[0]
//console.log(typeof id)
  res.redirect('/payment/' + id)
})

function getBrickById(id){
  for(let i = 0; i < wall.bricks.length; i++) {
    for(let j=0; j < wall.bricks[0].length; j++) {
      if(wall.bricks[i][j].id === Number(id)) {
        return wall.bricks[i][j] 
      }
    }
  }
}


module.exports = router

