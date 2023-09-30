const mongoose = require("mongoose");
const config = require("../config/config");

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        trim:true
    },
    product_disc:{
        type: String,
        trim:true
    },
    product_image: {
        type: String,
        trim: true,
      },
    product_price:{
        type:Number,
        trim:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:"category"
    },
    is_active:{
        type:Boolean,
        default:true
    }
},
{
    timestamps : true,
    versionKey:false,
    toJSON: {
        transform: function (doc, data) {
          if (data?.product_image) {
            data.product_image = `${config.base_url}product_images/${data.product_image}`;
          }
        },
      },
}
)

const product = mongoose.model("product" , productSchema);
module.exports = product;
