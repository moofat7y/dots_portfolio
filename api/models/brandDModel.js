const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var brandDModel = new mongoose.Schema(
  {
    public_id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("BrandDImages", brandDModel);
