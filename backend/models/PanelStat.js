const mongoose = require('mongoose');

const PanelStatSchema = new mongoose.Schema({
  panelId: String,
  health: Number, // %
  status: { type: String, enum: ['optimal', 'degraded', 'maintenance'], default: 'optimal' },
  lastChecked: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PanelStat', PanelStatSchema); 