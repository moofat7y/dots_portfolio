const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  refreshToken: { type: String },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = bcrypt.genSaltSync(12);
  this.password = await bcrypt.hash(this.password, salt);
});

// Add check password is correct func
userSchema.methods.isPasswordMatch = async function (password) {
  return bcrypt.compare(password, this.password);
};
//Export the model
module.exports = mongoose.model("User", userSchema);
