const express = require('express')
const router = express.Router()
const messages = require('../messages')

router.get('/', function (req, res) {
	res.render('form')
})

router.post('/', function (req, res) {
	const newMessage = { text: req.body.text, user: req.body.user, added: new Date() }
	messages.push(newMessage)
	res.redirect('/')
})

module.exports = router
