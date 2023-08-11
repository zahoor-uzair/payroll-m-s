const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  fname: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  imageurl: {
    type: String
  },
  token: { type: String },
});
const User = mongoose.model("user", userSchema)
module.exports = User;