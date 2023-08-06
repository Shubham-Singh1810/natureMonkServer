const Banner = require("../models/bannerImg.model");
require("dotenv").config();
module.exports = {
  create: async function (body) {
    let result = {};
    try {
      result.data = await new Banner(body).save();
      result.message = "Product added successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  getBanners: async function (body) {
    let result = {};
    try {
      result.data = await Banner.find(body.query);
      result.message = "Banner list fatched successfully";
      result.count = await Banner.countDocuments(query);
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  delete: async function (id) {
    let result = {};
    try {
      result.data = await  Banner.findByIdAndDelete(id);
      result.message = "Banner deleted successfully";
    } catch (error) {
      result.message = error;
    }
    return result;
  },
};
