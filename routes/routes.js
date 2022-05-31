const express = require('express')
const router = express.Router()

/* Importing the public.js file. */
const publicRoutes = require('./public')

router.use('/public', publicRoutes)

module.exports = router
