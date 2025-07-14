const mongoose = require('mongoose');

const MaintenanceSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  type: String,
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  notes: String
});

module.exports = mongoose.model('Maintenance', MaintenanceSchema); 