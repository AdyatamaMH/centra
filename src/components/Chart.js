import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

// All dummy data
const data = [
  { day: 0, weight: 25000 },
  { day: 1, weight: 50000 },
  { day: 2, weight: 75000 },
  { day: 3, weight: 60000 },
  { day: 4, weight: 40000 },
  { day: 5, weight: 65000 },
  { day: 6, weight: 70000 },
];

const CustomChart = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <h2 style={{ textAlign: 'center' }}>Centra [Location]</h2>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{ top: 30, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" label={{ value: 'Days in a Week', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Total Weight of Leaves (KG)', angle: -90, position: 'insideLeft', offset: 10 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default CustomChart;
