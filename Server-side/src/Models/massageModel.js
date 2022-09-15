const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    subject: String,
    description: String,
    isOpen: Boolean,
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const massageModel = mongoose.model("massages", DataSchema);

module.exports = massageModel;
