const router = require('express').Router()
const Bread = require('../models/breads')

// GET all the bread
router.get('/', (req, res) => {
  res.render('index', {
    breads: Bread
  })
})

// GET bread a specific bread
router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:index', (req, res) =>{
  const { index } = req.params
  res.render('show', {
    bread: Bread[index],
    index: index
  })
})

router.get('/:index/edit', (req, res) => {
  const { index } = req.params
  res.render('edit', {
    bread: Bread[index],
    index: index
  })
})


router.post('/', (req, res) => {
  if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'
  if (req.body.hasGluten === 'on'){
      req.body.hasGluten = true
  } else{
    req.body.hasGluten = false
  }

  Bread.push(req.body)
  res.status(303).res.redirect('/breads')
})

router.delete('/:index', (req, res) => {
  const { index } = req.params
  Bread.splice(index, 1)
  res.status(303).redirect('/breads')
})

router.put('/:index', (req, res) => {
  const { index } = req.params
  if (!req.body.image) req.body.image = 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpg'

  if (req.body.hasGluten === 'on'){
      req.body.hasGluten = true
  } else{
    req.body.hasGluten = false
  }

  Bread[index] = req.body
  res.status(303).redirect(`/breads/${index}`)
})

module.exports = router

// get, post, put, patch, delete