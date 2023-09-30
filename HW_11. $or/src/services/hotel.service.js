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
  return Hotel.find({$or : [{is_active : true},{hotel_phone : "+1 908-869-001"}]})
};

const deletehotel = async(hotelId) => {
  return Hotel.findByIdAndDelete(hotelId)
}


module.exports = {
  createhotel,
  gethotelList,
  deletehotel
};