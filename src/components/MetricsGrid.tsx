import React from 'react';
import MetricCard from './MetricCard';
import { HeartIcon, MoonIcon, FireIcon, BoltIcon } from '@heroicons/react/24/outline';

const iconStyle = { width: 32, height: 32 };

const MetricsGrid = () => {
  const metrics = [
    {
      label: 'Muscle Recovery',
      value: '85%',
      icon: <FireIcon />,
    },
    {
      label: 'Calories',
      value: '2450',
      icon: <HeartIcon />,
    },
    {
      label: 'Sleep',
      value: '7.5 hrs',
      icon: <MoonIcon />,
    },
    {
      label: 'Steps',
      value: '8432',
      icon: <BoltIcon />,
    },
  ];

  return (
    <div className="metrics-grid-2x2">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          value={metric.value}
          label={metric.label}
          icon={metric.icon}
        />
      ))}
    </div>
  );
};

export default MetricsGrid; 