const portfolioModel = require("../Models/portfolioModel");

//! Create Portfolio

exports.createPortfolio = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await portfolioModel.create(reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Read All Portfolio

exports.readPortfolio = async (req, res) => {
  try {
    let data = await portfolioModel.find();
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Read single Portfolio
exports.readSinglePortfolio = async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    let data = await portfolioModel.findOne({ _id: id });
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Delete Portfolio

exports.deletePortfolio = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let data = await portfolioModel.remove(query);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Update Portfolio

exports.updatePortfolio = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };
    let reqBody = req.body;
    let data = await portfolioModel.updateOne(query, reqBody);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

//! Pagination Controllers

exports.portfolioList = async (req, res) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = 4;
    let skipRow = (pageNo - 1) * perPage;

    let data = await portfolioModel.aggregate([
      {
        $facet: {
          Total: [{ $count: "count" }],

          Row: [{ $skip: skipRow }, { $limit: perPage }],
        },
      },
    ]);

    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};