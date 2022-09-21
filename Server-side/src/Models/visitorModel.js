const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    visitorCount: { type: String },
    createdDate: { type: String },
    // createdDate: { type: String, default: new Date().toLocaleDateString() },
    // createdDate: {
    //   type: Date,
    //   default: moment(new Date()).format("YYYY-MM-DD"),
    // },
  },
  { versionKey: false }
);

const visitorModel = mongoose.model("visitors", DataSchema);
module.exports = visitorModel;
