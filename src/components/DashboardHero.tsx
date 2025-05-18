import React from 'react';

interface DashboardHeroProps {
  style?: React.CSSProperties;
}

const DashboardHero = ({ style }: DashboardHeroProps) => {
  return (
    <section className="dashboard-hero" style={style}>
      <div className="dashboard-hero-text">
        <h1>Overview Of Your Health</h1>
        <p className="dashboard-hero-sub">Harmonious Living: Balance, Strength, Vitality, Wellness.</p>
      </div>
    </section>
  );
};

export default DashboardHero; 