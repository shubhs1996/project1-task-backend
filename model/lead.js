const mongoose = require("mongoose");

//schema or modal for course
const leadSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  website: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Leads", leadSchema);
