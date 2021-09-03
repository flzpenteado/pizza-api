const AWS = require("aws-sdk");

const docClient = new AWS.DynamoDB.DocumentClient();

const updateOrder = (id, order) => {
  if (!id || !order) {
    throw new Error(
      "Order Id and order object are required for updating the order"
    );
  }

  const params = {
    TableName: "orders",
    Key: { 'id': id },
    UpdateExpression: "set pizzaId = :pizzaId, address = :address",
    ExpressionAttributeValues: {
      ":pizzaId": order.pizzaId,
      ":address": order.address,
    },
    ReturnValues: 'ALL_NEW'
  };

  return docClient.update(params)
  .promise()
  .then(result => console.log('Order updated.'))
  .catch(error => {
      console.log('Order is not updated. ', error)
      throw error
  })
}

module.exports = updateOrder;
