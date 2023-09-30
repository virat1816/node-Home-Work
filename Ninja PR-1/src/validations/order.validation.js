const Joi = require("joi");

// create order 
const createOrder = {
    body: Joi.object().keys(
        {
            order_name: Joi.string().required().trim(),
            quantity: Joi.number().integer().required(),
            product: Joi.string().required(),
            user: Joi.string().required(),
        }
    )
}

module.exports = {
    createOrder
}