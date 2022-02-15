const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
  googleId: String,
})

module.exports = mongoose.model("User", UserSchema)
