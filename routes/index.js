// const newRouter = require('./.js')
const express = require('express')
const router = express.Router()
const messages = require('../messages')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages })
})

module.exports = router
