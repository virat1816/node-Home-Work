const Grocery = require("../models/grocery.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

const getGrocery = async () => {
    return Grocery.find()
};

const deleteGrocery = async (sclId) => {
    return Grocery.findByIdAndDelete(sclId)
}


module.exports = {
    createGrocery,
    getGrocery,
    deleteGrocery
};