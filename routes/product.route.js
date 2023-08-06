const express = require("express");
const router= express.Router();
const productController = require("../controller/product.controller");
const imgUpload = require("../utils/multer")

router.route("/create").post(imgUpload.single("productHeroImg"), productController.create);
router.route("/getProducts").post(productController.getProducts);
router.route("/getProduct/:id").get(productController.getProductById);
router.route("/update").put(imgUpload.single("productHeroImg"), productController.update);
router.route("/updateProductGallery").put(imgUpload.single("productGallery"), productController.uploadProductInGaller);
router.route("/deletePicInGallery").put(productController.DeleteProductPicInGaller);
router.route("/updateProductVideo").put(imgUpload.single("video"), productController.uploadProductVideo);
router.route("/deleteVideoInGallery").put(productController.DeleteProductVideoInGaller);
router.route("/:id").delete(productController.delete);

module.exports = router