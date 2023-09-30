const Pharmacy = require("../models/pharmacy.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
};

const getPharmacy = async () => {
    return Pharmacy.find({$or : [{is_active : true}]})
};

const deletePharmacy = async (sclId) => {
    return Pharmacy.findByIdAndDelete(sclId)
}


module.exports = {
    createPharmacy,
    getPharmacy,
    deletePharmacy
};