import React, { useState, useEffect } from 'react';
import MetricCard from './MetricCard';
import { HeartIcon, MoonIcon, FireIcon, BoltIcon } from '@heroicons/react/24/outline';

const iconStyle = { width: 32, height: 32 };

// Define the initial structure of metrics without specific values
const initialMetrics = [
  {
    label: 'Muscle Recovery',
    icon: <FireIcon style={iconStyle} />,
  },
  {
    label: 'Calories',
    icon: <HeartIcon style={iconStyle} />,
  },
  {
    label: 'Sleep',
    icon: <MoonIcon style={iconStyle} />,
  },
  {
    label: 'Steps',
    icon: <BoltIcon style={iconStyle} />,
  },
];

const MetricsGrid = () => {
  const [metricsData, setMetricsData] = useState(initialMetrics.map(metric => ({ ...metric, value: '--', unit: '' }))); // Initialize with placeholders
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const generateRandomValue = (label: string) => {
        switch (label) {
          case 'Muscle Recovery':
            return { value: `${Math.floor(Math.random() * 21) + 80}%`, unit: '' }; // 80-100%
          case 'Calories':
            return { value: `${Math.floor(Math.random() * 1001) + 2000}`, unit: '' }; // 2000-3000
          case 'Sleep':
            return { value: `${(Math.random() * 3 + 5).toFixed(1)}`, unit: 'hrs' }; // 5.0-8.0 hrs
          case 'Steps':
            return { value: `${Math.floor(Math.random() * 5001) + 5000}`, unit: '' }; // 5000-10000
          default:
            return { value: '--', unit: '' };
        }
      };

      const newMetricsData = initialMetrics.map(metric => {
        const { value, unit } = generateRandomValue(metric.label);
        return { ...metric, value, unit };
      });

      setMetricsData(newMetricsData);
      setIsLoading(false);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="metrics-grid-2x2">
      {metricsData.map((metric, index) => (
        <MetricCard
          key={index}
          value={metric.value}
          label={metric.label}
          icon={metric.icon}
          isLoading={isLoading} // Pass loading state
          unit={metric.unit} // Pass unit if available
        />
      ))}
    </div>
  );
};

export default MetricsGrid; 