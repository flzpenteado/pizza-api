const AWS = require('aws-sdk')

const docClient = new AWS.DynamoDB.DocumentClient()

const getOrders = (id) => {
  if (typeof id === 'undefined') {
    return docClient
      .scan({
        TableName: 'orders'
      })
      .promise()
      .then(result => result.Items)
  }

  return docClient.get({
    TableName: 'orders',
    Key: { id }
  })
    .promise()
    .then(result => result.Item)
}

module.exports = getOrders
