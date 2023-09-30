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
    return Music.find()
};

const deleteMusic = async (sclId) => {
    return Music.findByIdAndDelete(sclId)
}


module.exports = {
    createMusic,
    getMusic,
    deleteMusic
};