const Joi = require("joi");

// create cart 
const createCart = {
    body : Joi.object().keys({
        quantity : Joi.number().integer().required(),
        order_status : Joi.array().required(),
        order: Joi.string().required(),
    })
};

module.exports = {
    createCart
}