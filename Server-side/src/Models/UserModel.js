const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true, index: true },
    password: { type: String },
    photo: { type: String },
    name: { type: String },
    role: { type: String },
  },
  { versionKey: false }
);

const userModel = mongoose.model("admin-users", DataSchema);

module.exports = userModel;
