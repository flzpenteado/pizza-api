'use strict'

const Api = require('claudia-api-builder')
const getPizzas = require('./handlers/get-pizzas')

const api = new Api()

api.get('/', () => 'Pizza Api')

api.get('/pizzas', () => getPizzas())

api.get('/pizzas/{id}', request => getPizzas(request.pathParams.id), {
    error: 404
})

module.exports = api