const express = require('express')
const mailRouter = express.Router()
const bodyParser = require('body-parser')
const { body } = require('express-validator')
// mail controller
const Mail = require('./../../controller/mail')
mailRouter.use(bodyParser.urlencoded({ extended: true }))
mailRouter.use(bodyParser.json())

mailRouter.post('/subscribe', body('email').isEmail(), Mail.subscribe)

module.exports = mailRouter
