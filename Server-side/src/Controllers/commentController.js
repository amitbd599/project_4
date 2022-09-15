const commentModel = require("../Models/commentModel");
const ObjectId = require("mongoose").Types.ObjectId;
//! Create Comment Post

exports.createCommentPost = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await commentModel.create(reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Read All Comment Post

exports.readCommentPost = async (req, res) => {
  try {
    let data = await commentModel.aggregate([
      {
        $project: {
          name: 1,
          email: 1,
          img: 1,
          description: 1,
          status: 1,
          createdDate: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Read single Blog all Comment Post
exports.readSingleCommentPost = async (req, res) => {
  try {
    let data = await commentModel.aggregate([
      { $match: { blogId: ObjectId(req.params.id) } },
      {
        $project: {
          name: 1,
          email: 1,
          img: 1,
          description: 1,
          status: 1,
          createdDate: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Delete Comment Post

exports.deleteCommentPost = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let data = await commentModel.remove(query);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Update Comment Post

exports.updateCommentPost = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    let data = await commentModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};