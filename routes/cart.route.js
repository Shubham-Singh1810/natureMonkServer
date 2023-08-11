const express = require("express");
const router= express.Router();
const cartController = require("../controller/cart.controller");


router.route("/create").post(cartController.create);
router.route("/getCarts/:id").get(cartController.getCarts);
// router.route("/getOrder/:id").get(orderController.getOrderById);
// router.route("/update").put(orderController.update);
// router.route("/:id").delete(orderController.delete);

module.exports = router