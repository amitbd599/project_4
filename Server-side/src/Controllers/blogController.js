const blogModel = require("../Models/blogModel");

//! Create Blog Post

exports.createBlogPost = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await blogModel.create(reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Read All Blog Post

exports.readBlogPost = async (req, res) => {
  try {
    let data = await blogModel.aggregate([
      { $match: { author: "admin" } },
      {
        $project: {
          title: 1,
          img: 1,
          description: 1,
          author: 1,
          comment: 1,
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

//! Read single Blog Post
exports.readSingleBlogPost = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let data = await blogModel.findOne({ _id: id });
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Delete Blog Post

exports.deleteBlogPost = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let data = await blogModel.remove(query);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Update Blog Post

exports.updateBlogPost = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    let data = await blogModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Comment Update Post

exports.commentPost = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;

    let data = await blogModel.updateOne(query, { $push: reqBody });
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Total Show Post by User
exports.totalShowSingleBlog = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    let data = await blogModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Find All CommentPost
exports.allCommentPost = async (req, res) => {
  try {
    let data = await blogModel.aggregate([
      { $match: { author: "admin" } },
      {
        $project: {
          comment: {
            name: 1,
            email: 1,
            description: 1,
            createdDate: {
              $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
            },
          },
        },
      },
    ]);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Pagination Controllers

exports.productList = async (req, res) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = 6;
    let skipRow = (pageNo - 1) * perPage;

    let data = await blogModel.aggregate([
      { $sort: { _id: -1 } },
      {
        $facet: {
          Total: [{ $count: "count" }],

          Row: [
            {
              $project: {
                title: 1,
                img: 1,
                description: 1,
                author: 1,
                show: 1,
                comment: 1,
                createdDate: {
                  $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
                },
              },
            },

            { $skip: skipRow },
            { $limit: perPage },
          ],
        },
      },
    ]);

    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};
