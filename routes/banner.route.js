const express = require("express");
const router= express.Router();
const bannerController = require("../controller/banner.controller");
const imgUpload = require("../utils/multer")

router.route("/create").post(imgUpload.single("bannerImg"), bannerController.create);
router.route("/getBanners").post(bannerController.getBanners);
router.route("/:id").delete(bannerController.delete);

module.exports = router