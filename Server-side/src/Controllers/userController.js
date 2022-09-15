const JWT = require("jsonwebtoken");
const massageModel = require("../Models/massageModel");
const userModel = require("../Models/UserModel");
const SendEmailUtility = require("../Utility/SendEmailUtility");
const ObjectId = require("mongoose").Types.ObjectId;
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

// ! Send Email
exports.EmailSend = async (req, res) => {
  let reqBody = req.body;

  let name = reqBody.name;
  let EmailSubject = reqBody.subject;
  let email = reqBody.email;
  let EmailText = reqBody.massage;

  try {
    //Submit to Database
    let SendToDB = await massageModel.create(reqBody);
    // Send Email to Gmail
    let SendEmail = await SendEmailUtility(
      name,
      email,
      EmailText,
      EmailSubject
    );
    res
      .status(200)
      .json({ status: "Success", data: SendEmail, dataDB: SendToDB });
  } catch (e) {
    res.status(400).json({ status: "Fail", data: "Wrong Wrong" });
  }
};

//! Get All Massage

exports.GetAllMassage = async (req, res) => {
  try {
    let Data = await massageModel.aggregate([
      { $sort: { _id: -1 } },
      {
        $project: {
          email: 1,
          name: 1,
          subject: 1,
          description: 1,
          isOpen: 1,
          createdDate: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "Success", data: Data });
  } catch (e) {
    res.status(400).json({ status: "Fail", error: e });
  }
};

//! Read single Massage
exports.ReadSingleMassage = async (req, res) => {
  try {
    let id = req.params.id;

    let data = await massageModel.aggregate([
      { $match: { _id: ObjectId(req.params.id) } },
      {
        $project: {
          _id: 1,
          email: 1,
          name: 1,
          subject: 1,
          description: 1,
          createdDate: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);

    let dataUpdate = await massageModel.findOneAndUpdate(
      { _id: id },
      { isOpen: true }
    );
    res
      .status(200)
      .json({ status: "Success", data: data, dataUpdate: dataUpdate });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Delete Single Massage

exports.DeleteSingleMassage = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let data = await massageModel.deleteOne(query);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

// ! Email Verify
exports.EmailVerifyData = async (req, res) => {
  try {
    let reqBody = req.body;
    let email = reqBody.email;
    let password = reqBody.password;
    let data = await userModel.aggregate([
      { $match: { email: email, password: password } },
      { $project: { email: 1, password: 1, photo: 1, name: 1, role: 1 } },
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

exports.GetAllUser = async (req, res) => {
  try {
    let data = await userModel.aggregate([
      // { $match: { email: "amitbd5900@gmail.com" } },
      { $project: { email: 1, photo: 1, role: 1, name: 1 } },
    ]);
    if (data.length > 0) {
      res.status(200).json({ status: "Success", data: data });
    } else {
      res.status(200).json({ status: "Unauthorized", data: data });
    }
  } catch (e) {
    res.status(200).json({ status: "Fail Data", error: e });
  }
};
exports.GetSingleUser = async (req, res) => {
  let reqBody = req.body;
  let email = reqBody.email;
  console.log(reqBody);
  try {
    let data = await userModel.aggregate([
      { $match: { email: email } },
      { $project: { email: 1, photo: 1, role: 1, name: 1 } },
    ]);
    if (data.length > 0) {
      res.status(200).json({ status: "Success", data: data });
    } else {
      res.status(200).json({ status: "Unauthorized", data: data });
    }
  } catch (e) {
    res.status(200).json({ status: "Fail Data", error: e });
  }
};
