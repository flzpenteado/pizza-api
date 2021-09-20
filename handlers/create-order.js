const AWS = require('aws-sdk')
const uuid = require('uuid')
const client = require('minimal-request-promise')

const docClient = new AWS.DynamoDB.DocumentClient()

const DELIVERY_URL = 'https://some-like-it-hot.effortless-serverless.com'

const createOrder = (order) => {
  if (!order || !order.pizzaId || !order.address) {
    throw new Error(
      'To order a pizza, please provide pizza type and address pizza should be delivered'
    )
  }

  return client
    .post(`${DELIVERY_URL}/delivery`, {
      headers: {
        Authorization: 'aunt-marias-pizzeria-1234567890',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        pickupTime: '15.34pm',
        pickupAddress: 'Aunt maria Pizzeria',
        deliveryAddress: order.address,
        webhookUrl:
          'https://ktglosji05.execute-api.us-east-1.amazonaws.com/latest/delivery'
      })
    })
    .then((rawResponse) => JSON.parse(rawResponse.body))
    .then((response) => {
      console.log('[flzpenteado] ', response)
      docClient
        .put({
          TableName: 'orders',
          Item: {
            id: response.deliveryId,
            pizzaId: order.pizzaId,
            address: order.address,
            status: 'pending'
          }
        })
        .promise()
        .then((res) => {
          console.log('Order is saved! ', res)
          return res
        })
        .catch((error) => {
          console.log('Order is not saved. ', error)
          throw error
        })
    })
}

module.exports = createOrder
