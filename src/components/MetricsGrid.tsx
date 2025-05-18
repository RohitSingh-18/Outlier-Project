import { HeartIcon, ArrowPathIcon, MoonIcon, FireIcon } from '@heroicons/react/24/outline';
import MetricCard from './MetricCard';

const iconStyle = { width: 32, height: 32 };

const MetricsGrid = () => {
  const metrics = [
    {
      value: 72,
      label: 'Heart Rate (bpm)',
      icon: <HeartIcon style={iconStyle} />,
    },
    {
      value: 8432,
      label: 'Steps Today',
      icon: <ArrowPathIcon style={iconStyle} />,
    },
    {
      value: 7.5,
      label: 'Sleep Duration (hrs)',
      icon: <MoonIcon style={iconStyle} />,
    },
    {
      value: 2450,
      label: 'Calories Burned',
      icon: <FireIcon style={iconStyle} />,
    },
  ];

  return (
    <div className="metrics-grid">
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