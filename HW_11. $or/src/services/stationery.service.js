


const Stationery = require("../models/stationery.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createstationery = async (reqBody) => {
    return Stationery.create(reqBody);
};

const getstationery = async () => {
    return Stationery.find({$or : [{is_active : true}]})
};

const deletestationery = async (statId) => {
    return Stationery.findByIdAndDelete(statId)
}


module.exports = {
    createstationery,
    getstationery,
    deletestationery
};