const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

const updateDeliveryStatus = request => {
  if (!request.deliveryId || !request.deliveryStatus) {
    throw new Error('Status and delivery Id are required.')
  }

  return docClient.update({
    TableName: 'orders',
    Key: {
      id: request.deliveryId
    },
    AttributeUpdates: {
      status: {
        Action: 'PUT',
        Value: request.deliveryStatus
      }
    }
  }).promise()
    .then(response => response)
}

module.exports = updateDeliveryStatus
