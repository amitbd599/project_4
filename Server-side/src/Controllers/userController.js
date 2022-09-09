const JWT = require("jsonwebtoken");
const userModel = require("../Models/UserModel");
const SendEmailUtility = require("../Utility/SendEmailUtility");

//! Admin Login API

exports.login = async (req, res) => {
  try {
    let reqBody = req.body;

    let data = await userModel.aggregate(
      [{ $match: reqBody }, { $project: { _id: 1, email: 1, photo: 1 } }],
      (error, data) => {
        if (data.length > 0) {
          let Payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0]["email"],
          };
          let token = JWT.sign(Payload, `${process.env.JWT_AUTH_SECRET_KEY}`);
          res
            .status(200)
            .json({ status: "Success", token: token, data: data[0] });
        } else {
          res.status(200).json({ status: "Unauthorized", data: data });
        }
      }
    );
  } catch (e) {
    res.status(200).json({ status: "Fail Data", error: e });
  }
};

exports.EmailSend = async (req, res) => {
  let reqBody = req.body;

  let name = reqBody.name;
  let EmailSubject = reqBody.subject;
  let email = reqBody.email;
  let EmailText = reqBody.massage;

  try {
    // Send Email
    let SendEmail = await SendEmailUtility(
      name,
      email,
      EmailText,
      EmailSubject
    );

    res.status(200).json({ status: "Success", data: SendEmail });
  } catch (e) {
    res.status(400).json({ status: "Fail", data: "Wrong Wrong" });
  }
};

exports.EmailVerifyData = async (req, res) => {
  try {
    let reqBody = req.body;
    let email = reqBody.email;
    let password = reqBody.password;
    let data = await userModel.aggregate([
      { $match: { email: email, password: password } },
      { $project: { email: 1, password: 1 } },
    ]);

    if (data.length > 0) {
      res.status(200).json({ status: "Success", data: data[0] });
    } else {
      res.status(200).json({ status: "Unauthorized", data: data });
    }
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};
