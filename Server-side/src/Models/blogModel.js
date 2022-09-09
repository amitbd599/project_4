const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String },
    img: { type: String },
    description: { type: String },
    author: { type: String },
    createdDate: { type: Date, default: Date.now() },
    show: { type: Number },
    comment: [
      {
        id: { type: String },
        name: { type: String },
        email: { type: String },
        description: { type: String },
        photo: { type: String },
        createdDate: { type: Date, default: Date.now() },
      },
    ],
  },
  { versionKey: false }
);

const blogModel = mongoose.model("blogs", DataSchema);
module.exports = blogModel;
