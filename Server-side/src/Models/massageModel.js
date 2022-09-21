const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    description: { type: String },
    isOpen: { type: Boolean, default: false },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const massageModel = mongoose.model("massages", DataSchema);

module.exports = massageModel;
