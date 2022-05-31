const path = require('path')
const publicPath = require(path.join(__dirname, '../../routes/public/swagger'))
const options = {
    swagger: '2.0',
    info: {
        description: 'Yanki backend',
        version: '1.0.0',
        title: 'Yanki Dev Server',
        termsOfService: 'https://yanki.vercel.app/terms',
        contact: {
            email: 'yanki8229@gmai.com',
        },
        license: {
            name: 'MIT',
            url: 'https://opensource.org/licenses/MIT',
        },
    },
    host: 'localhost:3001',
    basePath: '/api/v1',
    tags: [
        {
            name: 'Yanki',
            description: 'Yanki Backend',
            externalDocs: {
                description: 'Find out more',
                url: 'http://swagger.io',
            },
        },
    ],
    schemes: ['https', 'http'],
    servers: [
        {
            url: 'http://localhost:3001/api/v1',
            description: 'Local',
        },
    ],
    paths: {
        ...publicPath,
    },
    securityDefinitions: {
        petstore_auth: {
            type: 'oauth2',
            authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
            flow: 'implicit',
            scopes: {
                'write:pets': 'modify pets in your account',
                'read:pets': 'read your pets',
            },
        },
        api_key: {
            type: 'apiKey',
            name: 'api_key',
            in: 'header',
        },
    },
    definitions: {
        Order: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    format: 'int64',
                },
                petId: {
                    type: 'integer',
                    format: 'int64',
                },
                quantity: {
                    type: 'integer',
                    format: 'int32',
                },
                shipDate: {
                    type: 'string',
                    format: 'date-time',
                },
                status: {
                    type: 'string',
                    description: 'Order Status',
                    enum: ['placed', 'approved', 'delivered'],
                },
                complete: {
                    type: 'boolean',
                    default: false,
                },
            },
            xml: {
                name: 'Order',
            },
        },
    },
    externalDocs: {
        description: 'Find out more about Swagger',
        url: 'http://swagger.io',
    },
}

module.exports = options
