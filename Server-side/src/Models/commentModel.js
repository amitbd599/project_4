const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    blogId: { type: String },
    name: { type: String },
    email: { type: String },
    img: { type: String },
    description: { type: String },
    createdDate: { type: Date, default: Date.now() },
    status: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const commentModel = mongoose.model("comments", DataSchema);
module.exports = commentModel;
