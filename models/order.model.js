const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
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

let Order = mongoose.model("order", orderSchema);
module.exports = Order;
