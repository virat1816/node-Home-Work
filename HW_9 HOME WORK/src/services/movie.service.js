const Movie = require("../models/movie.model");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
};

const getMovie = async () => {
    return Movie.find()
};

const deleteMovie = async (Id) => {
    return Movie.findByIdAndDelete(Id)
}


module.exports = {
    createMovie,
    getMovie,
    deleteMovie
};