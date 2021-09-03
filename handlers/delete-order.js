const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const deleteOrder = id => {
    if (!id) {
        throw new Error('Order Id is required for deleting the order')
    }

    const params = {
        TableName: "orders",
        Key: { 'id': id },
        NumberRangeKey: 1
      };
    
      return docClient.delete(params)
      .promise()
      .then(result => console.log('Order deleted.'))
      .catch(error => {
          console.log('Order is not deleted. ', error)
          throw error
      })
}

module.exports = deleteOrder