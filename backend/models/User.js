const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: {
    theme: { type: String, enum: ['dark', 'light'], default: 'dark' }
  }
});

module.exports = mongoose.model('User', UserSchema); 