import React from 'react';
import RecommendationList from '../components/RecommendationList';
import { Line, Pie, Bar, Doughnut, Radar, Scatter, PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  RadialLinearScale,
} from 'chart.js';

// Register necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale
);

const AnalyzePage = () => {
  // Sample data for charts
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: [120, 150, 180, 130, 170, 190],
        fill: false,
        backgroundColor: '#0072b1',
        borderColor: '#0072b1',
      },
    ],
  };

  const pieChartData = {
    labels: ['Solar', 'Wind', 'Grid'],
    datasets: [
      {
        label: 'Energy Sources',
        data: [30, 20, 50],
        backgroundColor: ['#0072b1', '#00408a', '#00b3e6'],
        hoverOffset: 4,
      },
    ],
  };

  const barChartData = {
    labels: ['Lighting', 'Heating', 'Cooling', 'Appliances'],
    datasets: [
      {
        label: 'Energy Consumption (kWh)',
        data: [50, 80, 70, 40],
        backgroundColor: '#0072b1',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Peak', 'Off-Peak'],
    datasets: [
      {
        label: 'Usage Distribution',
        data: [60, 40],
        backgroundColor: ['#0072b1', '#00b3e6'],
        hoverOffset: 4,
      },
    ],
  };

  const radarChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Energy Efficiency Score',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(0, 114, 177, 0.5)',
        borderColor: '#0072b1',
        borderWidth: 1,
      },
    ],
  };

  const scatterChartData = {
    datasets: [
      {
        label: 'Temperature vs Energy Usage',
        data: [
          { x: 15, y: 100 },
          { x: 20, y: 120 },
          { x: 25, y: 150 },
          { x: 30, y: 180 },
          { x: 35, y: 160 },
        ],
        backgroundColor: '#0072b1',
      },
    ],
  };

  const polarAreaChartData = {
    labels: ['Lighting', 'Heating', 'Cooling', 'Appliances', 'Others'],
    datasets: [
      {
        label: 'Energy Consumption Categories',
        data: [25, 30, 20, 15, 10],
        backgroundColor: ['#0072b1', '#00b3e6', '#00408a', '#00a8cc', '#003d66'],
      },
    ],
  };

  return (
    <main className="bg-gray-50 min-h-screen py-8 px-6">
      {/* Recommendations Section */}
      <section className="mb-16">
        <RecommendationList />
      </section>

      {/* Analysis Section */}
      <section className="analysis-section bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold text-[#0072b1] text-center mb-10">
          Energy Usage Analysis
        </h2>

        {/* Cards with Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 - Line Chart */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Over Time</h3>
            <Line data={lineChartData} />
          </div>

          {/* Card 2 - Pie Chart */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Sources Breakdown</h3>
            <Pie data={pieChartData} />
          </div>

          {/* Card 3 - Bar Chart */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Consumption by Category</h3>
            <Bar data={barChartData} />
          </div>

          {/* Card 4 - Doughnut Chart */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Peak vs Off-Peak Usage</h3>
            <Doughnut data={doughnutChartData} />
          </div>

          {/* Card 5 - Radar Chart */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Efficiency Score</h3>
            <Radar data={radarChartData} />
          </div>

          {/* Card 6 - Line Chart (Yearly Trend) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Yearly Energy Usage Trend</h3>
            <Line data={lineChartData} />
          </div>

          {/* Card 7 - Bar Chart (Energy Costs) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Monthly Energy Costs ($)</h3>
            <Bar data={barChartData} />
          </div>

          {/* Card 8 - Doughnut Chart (Energy Sources Share) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Renewable vs Non-renewable Sources</h3>
            <Doughnut data={doughnutChartData} />
          </div>

          {/* Card 9 - Pie Chart (Efficiency Gain) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficiency Gains Over Time</h3>
            <Pie data={pieChartData} />
          </div>

          {/* Card 10 - Scatter Plot (Temperature Impact) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Temperature vs Energy Usage</h3>
            <Scatter data={scatterChartData} />
          </div>

          {/* Card 11 - Polar Area Chart (Energy Consumption Categories) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Energy Consumption by Categories</h3>
            <PolarArea data={polarAreaChartData} />
          </div>

          {/* Card 12 - Line Chart (Correlation with Energy Saving Initiatives) */}
          <div className="card p-6 rounded-lg shadow-lg bg-white transition-transform duration-300 hover:scale-105 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact of Energy Saving Initiatives</h3>
            <Line data={lineChartData} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnalyzePage;
