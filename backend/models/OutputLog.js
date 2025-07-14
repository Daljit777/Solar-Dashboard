const mongoose = require('mongoose');

const OutputLogSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  output: Number, // kW
  battery: Number, // %
  cost: Number, // $ saved
  co2: Number // kg saved
});

module.exports = mongoose.model('OutputLog', OutputLogSchema); 