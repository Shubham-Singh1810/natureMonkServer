const mongoose = require("mongoose");

const bannerImgSchema = mongoose.Schema(
  {
    img : {
        type : String
    },
    category:{
        type :String
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let BannerImg = mongoose.model("cartItem", bannerImgSchema);
module.exports = BannerImg;
