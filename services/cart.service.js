const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const User = require("../models/user.model")
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Cart(body).save();
      result.message = "Added in cart";    
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getCarts: async function (id) {
    let result = {};
    try {
      result.data = await Cart.find({userId: id}).populate({path:"userId"}).populate({path:"productId"});
      result.message = "Cart List featched successfully"
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  // delete: async function (id) {
  //   let result = {};
  //   try {
  //     result.data = await  Banner.findByIdAndDelete(id);
  //     result.message = "Banner deleted successfully";
  //   } catch (error) {
  //     result.message = error;
  //   }
  //   return result;
  // },
};
