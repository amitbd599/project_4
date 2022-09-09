const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    img: { type: String },
    link: { type: String },
    frontend: { type: String },
    backend: { type: String },
    category: { type: String },
    technology: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const portfolioModel = mongoose.model("portfolios", DataSchema);
module.exports = portfolioModel;
