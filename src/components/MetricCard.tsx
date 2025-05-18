// import { motion } from 'framer-motion'; // Remove this line if motion is not used
// import { HeartIcon, FootstepsIcon, MoonIcon, FireIcon } from '@heroicons/react/24/outline'; // Remove this line if none of these specific icons are used directly in MetricCard.tsx
import React from 'react';

interface MetricCardProps {
  value: number | string;
  label: string;
  icon: React.ReactNode;
  isLoading: boolean;
  unit?: string;
}

const MetricCard = ({ value, label, icon, isLoading, unit }: MetricCardProps) => {
  return (
    <div className="metric-card-ui"> {/* Use the base class, styles will be overridden by .metrics-grid-2x2 .metric-card-ui */}
      {/* Top section: Icon, Value, Label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="metric-card-icon">{icon}</div>
        <div>
          <div className="metric-card-value">
            {isLoading ? '--' : value}
            {!isLoading && unit && <span className="metric-card-unit">{unit}</span>}
          </div>
          <div className="metric-card-label">{label}</div>
        </div>
      </div>
      
      {/* Removed Bottom section: Chart Placeholder */}
    </div>
  );
};

export default MetricCard; 