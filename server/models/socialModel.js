const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var socialSchema = new mongoose.Schema(
  {
    public_id: {
      type: String,
      required: true,
    },
    secure_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("SocialImages", socialSchema);
