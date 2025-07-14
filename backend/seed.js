const mongoose = require('mongoose');
const OutputLog = require('./models/OutputLog');
const PanelStat = require('./models/PanelStat');
const Maintenance = require('./models/Maintenance');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/solar_dashboard';

async function seed() {
  await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await OutputLog.deleteMany({});
  await PanelStat.deleteMany({});
  await Maintenance.deleteMany({});

  // Seed OutputLog (last 7 days, hourly)
  const now = new Date();
  let outputLogs = [];
  for (let d = 7; d >= 0; d--) {
    for (let h = 0; h < 24; h++) {
      const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - d, h);
      outputLogs.push({
        timestamp: date,
        output: Math.random() * 6 + 2, // 2-8 kW
        battery: Math.random() * 40 + 60, // 60-100%
        cost: Math.random() * 10 + 5, // $5-15
        co2: Math.random() * 5 + 2 // 2-7 kg
      });
    }
  }
  await OutputLog.insertMany(outputLogs);

  // Seed PanelStat
  const panelStats = [
    { panelId: 'P1', health: 98, status: 'optimal' },
    { panelId: 'P2', health: 95, status: 'optimal' },
    { panelId: 'P3', health: 87, status: 'degraded' },
    { panelId: 'P4', health: 92, status: 'optimal' }
  ];
  await PanelStat.insertMany(panelStats);

  // Seed Maintenance
  const maint = [
    { date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2), type: 'Cleaning', status: 'completed', notes: 'Routine cleaning' },
    { date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1), type: 'Inspection', status: 'completed', notes: 'All good' },
    { date: new Date(now.getFullYear(), now.getMonth(), now.getDate()), type: 'Checkup', status: 'pending', notes: 'Panel 3 output low' }
  ];
  await Maintenance.insertMany(maint);

  console.log('Database seeded!');
  process.exit();
}

seed(); 