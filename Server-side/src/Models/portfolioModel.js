const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    type: { type: String },
    category: [{ type: String }],
    img: { type: String },
    description: { type: String },
    client: { type: String },
    duration: { type: String },
    task: { type: String },
    createdDate: { type: Date, default: Date.now() },
    show: { type: Number },
  },
  { versionKey: false }
);

const portfolioModel = mongoose.model("portfolios", DataSchema);
module.exports = portfolioModel;
