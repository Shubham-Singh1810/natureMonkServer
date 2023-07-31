const User = require("../models/user.model");
const Contact = require("../models/contact.model")
const UserOtp = require("../models/userOtp.model");
const contact = require("../models/contact.model")
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
// const Post = require("../models/post.model");
require("dotenv").config();
module.exports = {
  sendOtp: async function (body) {
    let otp = Math.floor(Math.random() * 100000) + 100000;
    let obj = {
      email: body.email,
      password: body.password,
      fullName: body.fullName,
      otp: otp,
    };
    let result = {};
    let tempUser = await UserOtp.find({ email: body.email });
    if (tempUser.length == 0) {
      try {
        result.data = await new UserOtp(obj).save();
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          requireTLS: true,
          auth: {
            user: "hittheshubham1810@gmail.com", // generated ethereal user
            pass: "eqauulfefeodhxel", // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
        });
        let mailOption = {
          from: "hittheshubham1810@gmail.com",
          to: body.email,
          subject: "Email verification for Nature Monk",
          text: `Your OTP for email verification is ${otp}`,
        };
        transporter.sendMail(mailOption, async (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(info.response);
          }
        });
        result.message = "Otp has been sent to the given email address";
      } catch (error) {
        result.err = error;
      }
    } else {
      result.message = "Email is already registered";
    }
    return result;
  },
  verifyOtp: async function (body) {
    let result = {};
    try {
      let tempUser = await UserOtp.findOne(body);
      if (tempUser) {
        let obj ={
           email : tempUser.email,
           password : tempUser.password,
           fullName : tempUser.fullName,
        }
        result.data = await new User(obj).save();
        result.message = "User verified successfully";
      } else {
        result.message = "Incorrect otp";
      }
    } catch (error) {
      result.message = error;
    }
    return result;
  },
  login: async function (body) {
    let result = {};
    try {
      logedUser = await User.findOne(body);
      if (logedUser!=null) {
        result.data = logedUser;
        result.token = await jwt.sign( {logedUser} , process.env.JWT_KEY);
        result.message = "You are logged in successfully";
      } else {
        result.message = "Invalid login details";
      }
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  removeTempUser: async function (id) {
    let result = {};
    try {
      result.data = await UserOtp.findByIdAndDelete(id);
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  update: async function (body) {
    let result = {};
    try {
      result.data = await User.findByIdAndUpdate(body._id, { $set: body }, { new: true });
      result.message = "Record Updated Successfully";
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  contact: async function (body) {
    let result ={}
    try {
      result.data = await new Contact(body).save();
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
          user: "hittheshubham1810@gmail.com", // generated ethereal user
          pass: "eqauulfefeodhxel", // generated ethereal password
        },
      });
      let mailOption = {
        from: body.email,
        to: "hittheshubham1810@gmail.com",
        subject: `Contact email from ${body.name}`,
        text: body.message,
      };
      transporter.sendMail(mailOption, async (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(info.response);
        }
      });
      result.message = "Thanks for connecting we will come back to you soon";
    } catch (error) {
      result.err = error;
    }
    return result
  },
  getUserById: async function (id) {
    let result = {};
    try {
      result.data = await User.findOne({_id:id});
      result.message = "User data fatched successfully"
    } catch (error) {
      result.err = error;
    }
    return result;
  },
  getUsers : async function (req){
    let result ={};
    try {
      result.data = await User.find({})
      result.message = "User list fatched successfully"
    } catch (error) {
      result.err = error
    }
    return result
  },
};
