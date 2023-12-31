const School = require("../models/school.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createschool = async (reqBody) => {
    return School.create(reqBody);
};

const getSchool = async () => {
    return School.find()
};

const deleteschool = async (sclId) => {
    return School.findByIdAndDelete(sclId)
}


module.exports = {
    createschool,
    getSchool,
    deleteschool
};