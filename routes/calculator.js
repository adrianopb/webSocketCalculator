var express = require('express')
var calculator = require('../calculator')
var router = express.Router()

router.get('/sum', async function(req, res, next) {
  try {
      result = await calculator.sum(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Soma',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '+',
        result: result,
      }

      res.render('calculator', renderJSON)
      return renderJSON
  }
  catch(e) {
    return e.message
  }
})

router.post('/sum', async function(req, res, next) {
  try {
      result = await calculator.sum(req.body.first, req.body.last)
      req.body.result = result
      return result
  }
  catch(e) {
    return e.message
  }
})

router.get('/sub', async function(req, res, next) {
  try {
      result = await calculator.sub(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Subtração',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '-',
        result: result,
      }

      res.render('calculator', renderJSON)
      return renderJSON
  }
  catch(e) {
    return e.message
  }
})

router.post('/sub', async function(req, res, next) {
  try {
      result = await calculator.sub(req.body.first, req.body.last)
      req.body.result = result
      return result
  }
  catch(e) {
    return e.message
  }
})

router.get('/div', async function(req, res, next) {
  try {
      result = await calculator.div(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Divisão',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '/',
        result: result,
      }

      res.render('calculator', renderJSON)
      return renderJSON
  }
  catch(e) {
    return e.message
  }
})

router.post('/div', async function(req, res, next) {
  try {
      result = await calculator.div(req.body.first, req.body.last)
      req.body.result = result
      return result
  }
  catch(e) {
    return e.message
  }
})

router.get('/mult', async function(req, res, next) {
  try {
      result = await calculator.mult(req.query.first, req.query.last)
      renderJSON = {
        operation: 'Multiplicação',
        first: req.query.first,
        last: req.query.last,
        operationSymbol: '*',
        result: result,
      }

      res.render('calculator', renderJSON)
      return renderJSON
  }
  catch(e) {
    return e.message
  }
})

router.post('/div', async function(req, res, next) {
  try {
      result = await calculator.div(req.body.first, req.body.last)
      req.body.result = result
      return result
  }
  catch(e) {
    return e.message
  }
})

module.exports = router
