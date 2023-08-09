const orderServ = require("../services/order.service");
const util = require("../utils/util");
module.exports = {
  create: async function (req, res) {
    let result = await orderServ.create(req.body);
    util.sendResponse(result, req, res);
  },
  // getOrders: async function (req, res) {
  //   let result = await notificationServ.getNotifications(req.body);
  //   util.sendResponse(result, req, res);
  // },
  // getOrderById: async function (req, res) {
  //   let result = await notificationServ.getNotifications(req.body);
  //   util.sendResponse(result, req, res);
  // },
  // update: async function (req, res) {
  //   let result = await notificationServ.update(req.body._id, req.body);
  //   util.sendResponse(result, req, res);
  // },
  // delete: async function (req, res) {
  //   let result = await notificationServ.delete(req.params.id);
  //   util.sendResponse(result, req, res);
  // },
};
