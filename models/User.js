const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exporting the user schema
const User = mongoose.model('User', UserSchema);
module.exports = User;
