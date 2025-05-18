// import { motion } from 'framer-motion'; // Remove this line if motion is not used
// import { HeartIcon, FootstepsIcon, MoonIcon, FireIcon } from '@heroicons/react/24/outline'; // Remove this line if none of these specific icons are used directly in MetricCard.tsx

interface MetricCardProps {
  value: number | string;
  label: string;
  icon: React.ReactNode;
}

const MetricCard = ({ value, label, icon }: MetricCardProps) => {
  return (
    <div className="metric-card-ui">
      <div className="metric-card-icon">{icon}</div>
      <div className="metric-card-info">
        <div className="metric-card-value">{value}</div>
        <div className="metric-card-label">{label}</div>
      </div>
    </div>
  );
};

export default MetricCard; 