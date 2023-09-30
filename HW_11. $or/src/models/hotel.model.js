const { string } = require("joi");
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        trim: true
    },
    hotel_address: {
        type: String,
        trim: true
    },
    room_no: {
        type: Number,
    },
    room_price: {
        type: String,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false
    });

    const Hotel = mongoose.model("Hotel",hotelSchema);
    module.exports=Hotel;