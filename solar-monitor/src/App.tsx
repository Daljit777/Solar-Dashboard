import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50 p-4 md:p-8">
      <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-0">Solar Energy Monitoring Dashboard</h1>
        <span className="text-sm text-gray-500">Live Data & Predictive Insights</span>
      </header>
      <main className="grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Dashboard Cards */}
        <section className="lg:col-span-2 grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Solar Production</h2>
            {/* Animated Chart Placeholder */}
            <div className="w-full h-32 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-lg flex items-center justify-center text-2xl font-bold text-yellow-700">kWh Chart</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Consumption</h2>
            <div className="w-full h-32 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg flex items-center justify-center text-2xl font-bold text-blue-700">kWh Chart</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Net Energy</h2>
            <div className="w-full h-32 bg-gradient-to-r from-green-200 to-green-400 rounded-lg flex items-center justify-center text-2xl font-bold text-green-700">kWh Chart</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Panel Health</h2>
            <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-400 rounded-lg flex items-center justify-center text-2xl font-bold text-gray-700">Health Chart</div>
          </div>
        </section>
        {/* Predictive Maintenance */}
        <section className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 animate-fade-in">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Predictive Maintenance</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Panel Efficiency</span>
              <span className="font-bold text-green-600">98%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Temperature</span>
              <span className="font-bold text-yellow-600">45°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Issues</span>
              <span className="font-bold text-red-600">1 Alert</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Service</span>
              <span className="font-bold text-blue-600">2025-08-15</span>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">Maintenance Required</span>
          </div>
        </section>
      </main>
      {/* Solar Installation Cost Calculator */}
      <section className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Solar Installation Cost Calculator</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Panel Wattage (kW)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="e.g. 5" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Area Available (m²)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="e.g. 40" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Cost per kW ($)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="e.g. 1000" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Average Daily Usage (kWh)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="e.g. 20" />
          </div>
        </form>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-600">Estimated Panel Cost</span>
            <span className="text-xl font-bold text-yellow-700">$0</span>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-600">Area Required</span>
            <span className="text-xl font-bold text-blue-700">0 m²</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-600">Estimated Energy Savings</span>
            <span className="text-xl font-bold text-green-700">$0/year</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 flex flex-col items-center">
            <span className="text-gray-600">ROI</span>
            <span className="text-xl font-bold text-purple-700">0 years</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
