const deleteOrder = id => {
    if (!id) {
        throw new Error('Order Id is required for deleting the order')
    }

    return {
        message: `Order ${id} was successfully deleted`
    }
}

module.exports = deleteOrder