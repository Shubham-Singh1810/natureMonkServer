const bannerServ = require("../services/banner.service");
const util = require("../utils/util");
module.exports = {
  create: async function (req, res) {
    let obj;
    if (req.file) {
      obj = { ...req.body, bannerImg : process.env.API_BASE_URL + req.file.path };
    } else {
      obj = req.body;
    }
    let result = await bannerServ.create(obj);
    util.sendResponse(result, req, res);
  },
  getBanners: async function (req, res) {
    let result = await bannerServ.getBanners(req.body);
    util.sendResponse(result, req, res);
  },
  delete: async function (req, res) {
    let result = await bannerServ.delete(req.params.id);
    util.sendResponse(result, req, res);
  },
};
