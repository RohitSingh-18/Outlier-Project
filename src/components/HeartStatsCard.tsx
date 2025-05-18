const stats = [
  { label: 'Average', value: 98, color: '#6c63ff' },
  { label: 'Minimum', value: 48, color: '#2ec4b6' },
  { label: 'Maximum', value: 118, color: '#ff6b6b' },
];

const HeartStatsCard = () => (
  <div className="heart-stats-card">
    <div className="heart-stats-header">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/31/13/14/heart-2026616_1280.png"
        alt="Heart"
        className="heart-stats-img"
      />
      <div className="heart-stats-values">
        {stats.map((s) => (
          <div className="heart-stats-value" key={s.label}>
            <span className="dot" style={{ background: s.color }}></span>
            <span className="stat-label">{s.label}</span>
            <span className="stat-num">{s.value} bpm</span>
          </div>
        ))}
      </div>
    </div>
    <div className="heart-stats-chart">
      {/* Simple SVG line chart placeholder */}
      <svg width="100%" height="60" viewBox="0 0 220 60">
        <polyline
          fill="none"
          stroke="#4f46e5"
          strokeWidth="3"
          points="0,40 20,30 40,35 60,20 80,25 100,10 120,30 140,20 160,35 180,25 200,40 220,30"
        />
      </svg>
      <div className="chart-label">Heart Rate</div>
    </div>
  </div>
);

export default HeartStatsCard; 