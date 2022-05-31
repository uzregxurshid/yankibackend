const nodemailer = require('nodemailer')
const SMTPTransport = require('nodemailer/lib/smtp-transport')

const transporter = nodemailer.createTransport(
    new SMTPTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GOOGLE_EMAIL,
            pass: process.env.GOOGLE_PASSWORD,
        },
    })
)

const NewMessage = (add, html) => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(
            {
                from: process.env.GOOGLE_EMAIL,
                to: add,
                html: html,
                subject: 'Welcome to our website',
            },
            (err, info) => {
                if (err) {
                    reject(err)
                }
                resolve(info)
            }
        )
    })
}

module.exports = {
    NewMessage,
}
