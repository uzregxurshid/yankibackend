/* eslint-disable no-console */
const express = require('express')
const morgan = require('morgan')
const swaggerUi = require('swagger-ui-express')
require('dotenv').config()
const { default: helmet } = require('helmet')
const cors = require('cors')
// const createError = require('http-errors')

const router = require('../../routes/routes')
const sequelize = require('../../database/index')
const swaggerDocument = require('./swagger')

sequelize.sync({
    force: false,
    logging: console.log,
})

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
}))
app.disable('etag')
app.use(
    helmet({
        referrerPolicy: {
            policy: 'strict-origin-when-cross-origin',
        },

        hidePoweredBy: true,
        contentSecurityPolicy: {
            useDefaults: false,
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "'unsafe-inline'"],
                styleSrc: ["'self'", 'fonts.googleapis.com'],
                fontSrc: ["'self'", 'fonts.gstatic.com'],
                connectSrc: ["'self'", `${process.env.CLIENT_URL}`],
            },
        },
        frameguard: { action: 'deny' },
        xssFilter: true,
        hsts: {
            includeSubDomains: true,
            maxAge: 31536000,
        }
    })
)

app.use(morgan('common'))

app.use('/api/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))



app.listen(3001, () => {
    console.log('Server is running on port  http://localhost:3001')
})
