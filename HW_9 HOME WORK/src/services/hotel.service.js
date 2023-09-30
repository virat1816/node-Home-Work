const Hotel  = require("../models/hotel.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createhotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

const gethotelList = async () => {
  return Hotel.find()
};

const deletehotel = async(hotelId) => {
  return Hotel.findByIdAndDelete(hotelId)
}


module.exports = {
  createhotel,
  gethotelList,
  deletehotel
};