const multer = require("multer");

  const imgUpload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "uploads");
      },
      filename: function (req, file, cb) {
        cb(null, Math.round(Math.random()*98765) + file.originalname);
      },
    }),
  });

module.exports = imgUpload;
