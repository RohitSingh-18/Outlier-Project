// import React from 'react'; // Removed unused import
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { name: 'Jan', heartRate: 200, spo2: 800, bmi: 400, cals: 600 },
  { name: 'Feb', heartRate: 800, spo2: 200, bmi: 900, cals: 300 },
  { name: 'Mar', heartRate: 400, spo2: 600, bmi: 300, cals: 900 },
  { name: 'Apr', heartRate: 1000, spo2: 100, bmi: 1000, cals: 200 },
  { name: 'May', heartRate: 400, spo2: 600, bmi: 300, cals: 900 },
  { name: 'Jun', heartRate: 800, spo2: 200, bmi: 900, cals: 300 },
  { name: 'Jul', heartRate: 200, spo2: 800, bmi: 400, cals: 600 },
];





  


const HealthLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={mockData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* Lines for each metric with specified neon colors and thickness */}
        <Line type="natural" dataKey="heartRate" stroke="#FF073A" strokeWidth={3} /> {/* Neon Red for Heart Rate */}
        <Line type="natural" dataKey="spo2" stroke="#08F7FE" strokeWidth={3} /> {/* Electric Blue/Cyan for SpO2 */}
        <Line type="natural" dataKey="bmi" stroke="#FEF001" strokeWidth={3} /> {/* Bright Yellow for BMI */}
        <Line type="natural" dataKey="cals" stroke="#A9FE00" strokeWidth={3} /> {/* Neon Green for Cals */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HealthLineChart; 