const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var brandModel = new mongoose.Schema(
  {
    public_id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("BrandImages", brandModel);
