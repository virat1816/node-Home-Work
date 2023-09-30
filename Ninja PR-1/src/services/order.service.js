const {order} = require("../models");

// create order
const createOrder = async(reqBody) =>{
    return order.create(reqBody);
};

// get order list
const getOrderList = async(req,res) =>{
    return order.find({$or : [{is_active : true}]}).populate("product").populate("user");
};

// delete order 
const deleteOrder = async(orderId) =>{
    return order.findByIdAndDelete(orderId);
};

// get order details by id 
const getOrderById = async(orderId) =>{
    return order.findById(orderId).populate("product").populate("user");
};

// update order
const updateOrder = async(orderId , updateBody) =>{
    return order.findByIdAndUpdate(orderId , {$set : updateBody});
};

module.exports = {
    createOrder,
    getOrderList,
    deleteOrder,
    getOrderById,
    updateOrder
}