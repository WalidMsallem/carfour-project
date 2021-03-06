const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  lastName: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  }
});

module.exports = user = mongoose.model("user", UserSchema);