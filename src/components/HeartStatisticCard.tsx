import heartBeatImage from '../assets/heart-beat-removebg-preview.png';
import { useState, useEffect } from 'react';

// Initial placeholder stats
const placeholderStats: { label: string; value: number | string; unit: string; color: string }[] = [
  { label: 'Average', value: '--', unit: 'BPM', color: '#6c63ff' },
  { label: 'Minimum', value: '--', unit: 'BPM', color: '#2ec4b6' },
  { label: 'Maximum', value: '--', unit: 'BPM', color: '#ff6b6b' },
];

const HeartStatisticCard = () => {
  const [randomStats, setRandomStats] = useState(placeholderStats);
  const [isLoading, setIsLoading] = useState(true);
  const [randomBarHeights, setRandomBarHeights] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Generate random stats
      const generateRandomStats = () => {
        const average = Math.floor(Math.random() * (120 - 60 + 1)) + 60; // Between 60 and 120
        const min = Math.floor(Math.random() * (average - 40 + 1)) + 40; // Between 40 and average
        const max = Math.floor(Math.random() * (180 - average + 1)) + average; // Between average and 180

        return [
          { label: 'Average', value: average, unit: 'BPM', color: '#6c63ff' },
          { label: 'Minimum', value: min, unit: 'BPM', color: '#2ec4b6' },
          { label: 'Maximum', value: max, unit: 'BPM', color: '#ff6b6b' },
        ];
      };

      // Generate random bar heights
      const generateRandomBarHeights = () => {
        return Array.from({ length: 16 }).map(() => Math.random() * 40 + 10); // Random height between 10 and 50
      };

      setRandomStats(generateRandomStats());
      setRandomBarHeights(generateRandomBarHeights());
      setIsLoading(false);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="heart-statistic-card">
      <div className="card-title">Your Heart Statistic</div>
      
      {/* Container for swipe buttons and heart/line */}
      <div style={{ position: 'relative' }}>
        {/* Placeholder Swipe Buttons */}
        <button style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.5)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>&lt;</button>
        <button style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.5)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer' }}>&gt;</button>

        <div className="heart-image-container">
          <svg className="pulsating-line" viewBox="0 0 400 100" preserveAspectRatio="none">
            <g className="line-group">
              {/* Duplicate the path to ensure seamless looping */}
              <path d="M0,50 L50,50 L60,30 L70,70 L80,50 L150,50 L160,30 L170,70 L180,50 L250,50 L260,30 L270,70 L280,50 L350,50 L360,30 L370,70 L380,50 L400,50" />
              <path d="M400,50 L450,50 L460,30 L470,70 L480,50 L550,50 L560,30 L570,70 L580,50 L650,50 L660,30 L670,70 L680,50 L750,50 L760,30 L770,70 L780,50 L800,50" transform="translate(400, 0)" />
            </g>
          </svg>
          <img src={heartBeatImage} alt="Heart" className="pulsating-heart-img" />
        </div>
      </div>

      <div className="stats-row">
        {isLoading ? (
          placeholderStats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-dot" style={{ background: s.color }}></span>
              <span className="stat-label">{s.label}</span>
              <div className="stat-value">{s.value} <span className="stat-unit">{s.unit}</span></div>
            </div>
          ))
        ) : (
          randomStats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-dot" style={{ background: s.color }}></span>
              <span className="stat-label">{s.label}</span>
              <div className="stat-value">{s.value} <span className="stat-unit">{s.unit}</span></div>
            </div>
          ))
        )}
      </div>

      <div className="heart-rate-chart">
        <div className="chart-header">
          <span className="chart-title">Heart Rate</span>
          <span className="realtime-label">Real Time <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{width: 14, height: 14}}><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></span>
        </div>
        {/* Simple SVG line/bar chart placeholder matching style */}
        <svg width="100%" height="80" viewBox="0 0 250 80" preserveAspectRatio="none">
          <line x1="0" y1="75" x2="250" y2="75" stroke="#eee" strokeWidth="1" /> {/* X-axis */}
          {/* Vertical Bars - simplified representation */}
          {isLoading ? (
            // Display placeholder bars when loading
            Array.from({ length: 16 }).map((_, i) => {
              const x = i * (250 / 15) + (250 / 15) / 2;
              const height = 10; // Placeholder height
              const y = 75 - height;
              const strokeColor = (i % 2 === 0) ? '#dadaf9' : '#a8a2ff';
              return <line key={i} x1={x} y1={75} x2={x} y2={y} stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />;
            })
          ) : (
            // Display random bars when not loading
            randomBarHeights.map((height, i) => {
              const x = i * (250 / 15) + (250 / 15) / 2;
              const y = 75 - height;
              const strokeColor = (i % 2 === 0) ? '#dadaf9' : '#a8a2ff';
              return <line key={i} x1={x} y1={75} x2={x} y2={y} stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />;
            })
          )}
          {/* Labels */}
          <text x="0" y="79" fontSize="8" fill="#888" dominantBaseline="hanging">40</text>
          <text x="0" y="59" fontSize="8" fill="#888" dominantBaseline="hanging">60</text>
          <text x="0" y="39" fontSize="8" fill="#888" dominantBaseline="hanging">80</text>
          <text x="0" y="19" fontSize="8" fill="#888" dominantBaseline="hanging">100</text>
          <text x="0" y="-1" fontSize="8" fill="#888" dominantBaseline="hanging">120</text>
           {[...Array(8)].map((_, i) => {
            const x = i * (250 / 7) + (250 / 7) / 2;
            const time = `9:${10+i}`; // Simplified time labels
             return <text key={i} x={x} y="79" fontSize="8" fill="#888" textAnchor="middle" dominantBaseline="hanging">{time}</text>;
          })}

        </svg>
      </div>

    </div>
  );
};

export default HeartStatisticCard; 