const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- In-memory demo data ---
const now = new Date();
let outputLogs = [];
for (let d = 7; d >= 0; d--) {
  for (let h = 0; h < 24; h++) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - d, h);
    outputLogs.push({
      timestamp: date,
      output: +(Math.random() * 6 + 2).toFixed(2), // 2-8 kW
      battery: +(Math.random() * 40 + 60).toFixed(2), // 60-100%
      cost: +(Math.random() * 10 + 5).toFixed(2), // $5-15
      co2: +(Math.random() * 5 + 2).toFixed(2) // 2-7 kg
    });
  }
}
const panelStats = [
  { panelId: 'P1', health: 98, status: 'optimal' },
  { panelId: 'P2', health: 95, status: 'optimal' },
  { panelId: 'P3', health: 87, status: 'degraded' },
  { panelId: 'P4', health: 92, status: 'optimal' }
];
const maintenance = [
  { date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2), type: 'Cleaning', status: 'completed', notes: 'Routine cleaning' },
  { date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1), type: 'Inspection', status: 'completed', notes: 'All good' },
  { date: new Date(now.getFullYear(), now.getMonth(), now.getDate()), type: 'Checkup', status: 'pending', notes: 'Panel 3 output low' }
];
const alerts = [
  { type: 'danger', msg: 'Panel 3 output below threshold.' },
  { type: 'success', msg: 'Battery fully charged.' },
  { type: 'danger', msg: 'Maintenance due in 5 days.' }
];

// --- API Endpoints ---
app.get('/api/solar/realtime', (req, res) => {
  const latest = outputLogs[outputLogs.length - 1];
  res.json({
    ...latest,
    uptime: 99.7
  });
});

app.get('/api/solar/history', (req, res) => {
  // Last 7 days, hourly
  res.json(outputLogs);
});

app.get('/api/solar/panel-vs-consumption', (req, res) => {
  // Simulate panel output and consumption
  const labels = Array.from({length: 24}, (_, h) => `${h}:00`);
  const panel = labels.map(() => +(Math.random() * 6 + 2).toFixed(2));
  const consumption = labels.map(() => +(Math.random() * 7 + 3).toFixed(2));
  res.json({ labels, panel, consumption });
});

app.get('/api/solar/savings', (req, res) => {
  // Simulate 30 days of savings
  const days = Array.from({length: 30}, (_, i) => {
    const d = new Date(now.getTime() - (29 - i) * 24 * 60 * 60 * 1000);
    return d.toISOString().slice(0, 10);
  });
  const savings = days.map(() => +(Math.random() * 10 + 5).toFixed(2));
  res.json({ days, savings });
});

app.get('/api/solar/uptime', (req, res) => {
  res.json({ uptime: 99.7 });
});

app.post('/api/calculator', (req, res) => {
  const { wattage, area, costPerKW, usagePerDay } = req.body;
  if (!wattage || !area || !costPerKW || !usagePerDay) return res.status(400).json({ error: 'Missing fields' });
  const systemKW = (wattage * area) / 1000;
  const totalCost = systemKW * costPerKW;
  const annualOutput = systemKW * usagePerDay * 365;
  const savings = annualOutput * 0.18; // $0.18/kWh
  const roi = totalCost / savings;
  res.json({ systemKW, totalCost, annualOutput, savings, roi });
});

app.get('/api/alerts', (req, res) => {
  res.json(alerts);
});

app.get('/api/weather', (req, res) => {
  // Simulated weather
  res.json({ temp: 27, sun: 8.2, cloud: 18, desc: 'Sunny' });
});

app.get('/api/health', (req, res) => {
  const avgHealth = panelStats.reduce((a, p) => a + p.health, 0) / panelStats.length;
  res.json({ health: avgHealth, panels: panelStats, maintenance });
});

app.get('/api/maintenance', (req, res) => {
  res.json(maintenance);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 