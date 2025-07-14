const express = require('express');
const router = express.Router();

// Models
const OutputLog = require('../models/OutputLog');
const PanelStat = require('../models/PanelStat');
const Maintenance = require('../models/Maintenance');
const User = require('../models/User');

// GET /api/solar/realtime
router.get('/solar/realtime', async (req, res) => {
  // Simulate or fetch latest output log
  const latest = await OutputLog.findOne().sort({ timestamp: -1 });
  res.json(latest || {});
});

// GET /api/solar/history
router.get('/solar/history', async (req, res) => {
  // Return historical output logs (optionally filter by date)
  const logs = await OutputLog.find().sort({ timestamp: 1 });
  res.json(logs);
});

// GET /api/solar/panel-vs-consumption
router.get('/solar/panel-vs-consumption', async (req, res) => {
  // Simulate or fetch panel vs consumption data
  res.json({ panels: [], consumption: [] });
});

// GET /api/solar/savings
router.get('/solar/savings', async (req, res) => {
  // Simulate or fetch savings data
  res.json({ savings: [] });
});

// POST /api/calculator
router.post('/calculator', (req, res) => {
  // Calculate installation cost
  const { size, rate, incentive, annual } = req.body;
  if (!size || !rate || !annual) return res.status(400).json({ error: 'Missing fields' });
  const total = size * rate - (incentive || 0);
  const payback = total / (annual * 0.18);
  res.json({ total, payback });
});

// GET /api/alerts
router.get('/alerts', async (req, res) => {
  // Simulate or fetch alerts/logs
  const maint = await Maintenance.find().sort({ date: -1 });
  res.json(maint);
});

// GET /api/weather
router.get('/weather', async (req, res) => {
  // Proxy to OpenWeatherMap or similar (not implemented)
  res.json({ temp: 25, cloud: 20, sun: 8 });
});

// GET /api/health
router.get('/health', async (req, res) => {
  // Simulate or fetch system health
  const panels = await PanelStat.find();
  res.json({ panels });
});

// (Optional) Auth/User settings endpoints
// router.post('/auth/login', ...)
// router.get('/user/settings', ...)

module.exports = router; 