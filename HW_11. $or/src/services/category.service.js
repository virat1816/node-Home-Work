const Category = require("../models/category");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
};

const getCategoryList = async () => {
    return Category.find({
        $or: [{
            is_active: true
        }]
    })
};

const deletecategory = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId)
}


module.exports = {
    createCategory,
    getCategoryList,
    deletecategory
};