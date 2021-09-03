'use strict'

const Api = require('claudia-api-builder')
const getPizzas = require('./handlers/get-pizzas')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')
const getOrders = require('./handlers/get-orders')

const api = new Api()

// Home
api.get('/', () => 'Pizza Api')

// Pizza
api.get('/pizzas', () => getPizzas())

api.get('/pizzas/{id}', request => getPizzas(request.pathParams.id), {
    error: 404
})

// Order

api.get('/orders', () => getOrders())

api.get('/orders/{id}', request => getOrders(request.pathParams.id), {
    error: 404
})
api.post('/orders', request => createOrder(request.body), {
    success: 201,
    error: 400
})

api.put('/orders/{id}', request => updateOrder(request.pathParams.id, request.body), {
    error: 400
} )

api.delete('/orders/{id}', request => deleteOrder(request.pathParams.id), {
    error: 400
})

module.exports = api