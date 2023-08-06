const productServ = require("../services/product.service");
const util = require("../utils/util");
module.exports = {
  create: async function (req, res) {
    let obj;
    if (req.file) {
      obj = { ...req.body, productHeroImg: process.env.API_BASE_URL + req.file.path };
    } else {
      obj = req.body;
    }
    let result = await productServ.create(obj);
    util.sendResponse(result, req, res);
  },
  getProducts: async function (req, res) {
    let result = await productServ.getProducts(req.body);
    util.sendResponse(result, req, res);
  },
  getProductById: async function (req, res) {
    let result = await productServ.getProductById(req.params.id);
    util.sendResponse(result, req, res);
  },
  update: async function (req, res) {
    let query;
    if (req.file) {
      query = { $set: { ...req.body, productHeroImg: process.env.API_BASE_URL + req.file.path } };
    } else {
      query = { $set: { ...req.body } };
    }
    let result = await productServ.update(req.body._id, query);
    util.sendResponse(result, req, res);
  },
  uploadProductInGaller: async function (req, res) {
    let query;
    if (req.file) {
      query = { $push: { productGallery: process.env.API_BASE_URL + req.file.path } };
    } else {
      query = req.body;
    }
    let result = await productServ.update(req.body._id, query);
    util.sendResponse(result, req, res);
  },
  DeleteProductPicInGaller: async function (req, res) {
    let query = { $pull: { productGallery: req.body.productGalleryImg } };
    let result = await productServ.update(req.body._id, query);
    util.sendResponse(result, req, res);
  },
  uploadProductVideo: async function (req, res) {
    let query;
    if (req.file) {
      query = { $push: { video: process.env.API_BASE_URL + req.file.path } };
    } else {
      query = req.body;
    }
    let result = await productServ.update(req.body._id, query);
    util.sendResponse(result, req, res);
  },
  DeleteProductVideoInGaller: async function (req, res) {
    let query = { $pull: { video: req.body.productGalleryVideo } };
    let result = await productServ.update(req.body._id, query);
    util.sendResponse(result, req, res);
  },
  delete: async function (req, res) {
    let result = await productServ.delete(req.params.id);
    util.sendResponse(result, req, res);
  },
};
