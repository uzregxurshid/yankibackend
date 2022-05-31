const express = require('express')
const publicRoutes = express.Router()

/* Importing the mail.js file. */
const mailRouter = require('./mail')

/* Telling the server to use the mailRouter when the user goes to the /mail route. */

publicRoutes.use('/mail', mailRouter)

module.exports = publicRoutes
