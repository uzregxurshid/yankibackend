const { validationResult } = require('express-validator')
const sequelize = require('../../database')
const { FirstMessage } = require('../../service/nodemailer/messages/subscribe')
class Mail {
    async subscribe(req, response) {
        /* Validating the email address. */
        const valErrors = validationResult(req)
        if (!valErrors.isEmpty()) {
            return response.status(400).json({
                result: 'Validation Error',
            })
        }
        /* Creating a new mail address in the database. */
        await sequelize.models.mails
            .create({
                address: req.body.email,
            })
            .then((res) => {
                FirstMessage(res.getDataValue('address'))
                return response.status(200).json({
                    result: 'Successfully subscribed to the newsletter.',
                })
            })
            .catch((err) => {
                if (err.name === 'SequelizeUniqueConstraintError') {
                    return response.status(400).json({
                        result: 'You are already subscribed to the newsletter.',
                    })
                }
                return response.status(500).json({
                    result: 'Something went wrong.',
                })
            })
    }
}

module.exports = new Mail()
