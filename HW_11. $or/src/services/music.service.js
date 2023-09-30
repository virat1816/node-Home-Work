const Music = require("../models/music.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
};

const getMusic = async () => {
    return Music.find({$or : [{is_active : true}]})
};

const deleteMusic = async (sclId) => {
    return Music.findByIdAndDelete(sclId)
}


module.exports = {
    createMusic,
    getMusic,
    deleteMusic
};