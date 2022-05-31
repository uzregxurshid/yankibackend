const publicPath = {
    '/public/mail/subscribe': {
        post: {
            tags: ['email'],
            summary: 'Subscribe to our newsletter',
            description: 'Subscribe to our newsletter',
            operationId: 'subscribe',
            produces: ['application/json'],
            parameters: [
                {
                    name: 'email',
                    in: 'body',
                    description: 'Email address',
                    required: true,
                    type: 'object',
                    default: {
                        email: 'example@example.com',
                    },
                },
            ],
            responses: {
                200: {
                    description: 'Success',
                    schema: {
                        type: 'object',
                        properties: {
                            result: {
                                type: 'string',
                            },
                        },
                    },
                },
                400: {
                    description: 'Bad request',
                    schema: {
                        type: 'object',
                        properties: {
                            result: {
                                type: 'string',
                            },
                        },
                    },
                },
                500: {
                    description: 'Internal server error',
                    schema: {
                        type: 'object',
                        properties: {
                            result: {
                                type: 'string',
                            },
                        },
                        security: [
                            {
                                basicAuth: [],
                            },
                        ],
                    },
                },
            },
        },
    },
}

module.exports = publicPath
