const AWS = require('aws-sdk')
const uuid = require('uuid')

const docClient = new AWS.DynamoDB.DocumentClient()

const createOrder = order => {
    if (!order || !order.pizzaId || !order.address) {
        throw new Error('To order a pizza, please provide pizza type and address pizza should be delivered')
    }

    return docClient.put({
        TableName: 'orders',
        Item: {
            id: uuid(),
            pizzaId: order.pizzaId,
            address: order.address,
            status: 'pending'
        }
    }).promise()
    .then(res => {
        console.log('Order is saved! ', res)
        return res
    })
    .catch(error => {
        console.log(`Order is not saved. `, error)
        throw error
    })

}

module.exports = createOrder