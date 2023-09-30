const Travel = require("../models/travel.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
};

const getTravelList = async () => {
    return Travel.find({$or : [{is_active :true},{Destination : "Manali"}]})
};

const deleteTravel = async (Id) => {
    return Travel.findByIdAndDelete(Id)
}


module.exports = {
    createTravel,
    getTravelList,
    deleteTravel
};