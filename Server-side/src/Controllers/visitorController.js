const visitorModel = require("../Models/visitorModel");

exports.createVisitorData = async (req, res) => {
  try {
    data = await visitorModel.create({
      visitorCount: 1,
      createdDate: new Date().toISOString().slice(0, 10),
    });
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};

exports.getVisitorData = async (req, res) => {
  try {
    let reqBody = req.body;
    let date = req.params.date;
    data = await visitorModel.aggregate([
      { $match: { createdDate: date } },
      {
        $project: {
          visitorCount: 1,
          createdDate: 1,
        },
      },
    ]);
    res.status(200).json({ status: "Success", data: data });
  } catch (e) {
    res.status(200).json({ status: "Fail", error: e });
  }
};
