const Bus  = require("../models/bus.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

const getBusList = async () => {
  return Bus.find(({$or : [{is_active : true},{bus_name : "Mahadev travel"}]}))
};

const deleteBus = async(busId) => {
  return Bus.findByIdAndDelete(busId)
}


module.exports = {
  createBus,
  getBusList,
  deleteBus
};