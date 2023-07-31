const mongoose = require("mongoose");

const activeOrderSchema = mongoose.Schema(
  {
    quantity:{
        type: String,
    },
    status:{
        type: String,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    productId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let ActiveOrder = mongoose.model("activeOrder", activeOrderSchema);
module.exports = ActiveOrder;
