const pizzas = require("../data/pizzas.json")

const getPizzas = id => {
    if (!id) {
        return pizzas
    }

    const pizza = pizzas.find(pizza => pizza.id == id)

    if (!pizza) {
        throw new Error("Pizza not found")
    }

    return pizza
}

module.exports = getPizzas