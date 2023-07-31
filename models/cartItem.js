const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema(
  {
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

let CartItem = mongoose.model("cartItem", cartItemSchema);
module.exports = CartItem;
