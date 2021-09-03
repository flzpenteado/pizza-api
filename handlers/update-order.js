const updateOrder = (id, order) => {
    if  (!id || !order) {
        throw new Error('Order Id and order object are required for updating the order')
    }

    return {
        message: `Order ${id} was successfully updated`
    }
}

module.exports = updateOrder