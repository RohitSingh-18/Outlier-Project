import Layout from './components/Layout';
import MetricsGrid from './components/MetricsGrid';
import DashboardHero from './components/DashboardHero';
import ScheduleCard from './components/ScheduleCard';
import WearableSyncCard from './components/WearableSyncCard';
import HeartStatisticCard from './components/HeartStatisticCard';
import { motion } from 'framer-motion';
import { HeartIcon, CloudIcon, ScaleIcon, FireIcon } from '@heroicons/react/24/outline';
import HealthLineChart from './components/HealthLineChart';

function App() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ width: '100%' }}
      >
        <DashboardHero style={{ marginBottom: 32 }}/>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 32, alignItems: 'stretch' }}>
          <MetricsGrid />

          <WearableSyncCard />

          <HeartStatisticCard />
        </div>
        
        {/* Section for Schedule and Charts in a 2x grid (now aligned with 3 columns above) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 32 }}>
          {/* Charts section (Spans 2 columns) - Applied Glassmorphism styles */}
          <div className="charts-section" style={{
            gridColumn: 'span 2',
            background: 'rgba(255, 255, 255, 0.15)', /* Semi-transparent white background */
            backdropFilter: 'blur(10px)', /* Apply blur effect */
            borderRadius: '18px',
            border: '1px solid rgba(255, 255, 255, 0.2)', /* Subtle border */
            boxShadow: '0 8px 32px rgba(108, 99, 255, 0.3)', /* Purple shadow */
            padding: '24px',
            display: 'flex',
            gap: '24px',
          }}>
            {/* Chart Area */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Chart Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#222' }}>Health</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>Forecast</span>
                  <div style={{ fontSize: '0.9rem', color: '#4f46e5', cursor: 'pointer' }}>Last Month ▼</div>
                </div>
              </div>
              {/* Stacked Bar Chart Placeholder */}
              <div style={{ flex: 1, minHeight: '200px' }}>
                <HealthLineChart />
              </div>
            </div>
            {/* Metric Cards beside the chart */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '180px' }}>
              {/* Heart Rate Metric Card */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Icon Placeholder with light purple background */}
                <div style={{ width: '32px', height: '32px', background: '#e0e7ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>
                   {/* Heart Rate Icon */}
                   <HeartIcon style={{ width: '18px', height: '18px', color: '#4f46e5' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#222' }}>72 bpm</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>Heart Rate <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff6b6b', display: 'inline-block', marginLeft: '4px' }}></span></div>
                </div>
              </div>
              {/* SpO2 Metric Card */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 {/* Icon Placeholder with light purple background */}
                <div style={{ width: '32px', height: '32px', background: '#e0e7ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>
                   {/* SpO2 Icon */}
                   <CloudIcon style={{ width: '18px', height: '18px', color: '#4f46e5' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#222' }}>98%</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>SpO2 <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2ec4b6', display: 'inline-block', marginLeft: '4px' }}></span></div>
                </div>
              </div>
              {/* BMI Metric Card */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 {/* Icon Placeholder with light purple background */}
                <div style={{ width: '32px', height: '32px', background: '#e0e7ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>
                   {/* BMI Icon */}
                   <ScaleIcon style={{ width: '18px', height: '18px', color: '#4f46e5' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#222' }}>24.1</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>BMI <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffc107', display: 'inline-block', marginLeft: '4px' }}></span></div>
                </div>
              </div>
               {/* Cals Metric Card */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '12px', boxShadow: '0 1px 6px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 {/* Icon Placeholder with light purple background */}
                <div style={{ width: '32px', height: '32px', background: '#e0e7ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '18px' }}>
                   {/* Cals Icon */}
                   <FireIcon style={{ width: '18px', height: '18px', color: '#4f46e5' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#222' }}>650 kcal</div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>Cals <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4f46e5', display: 'inline-block', marginLeft: '4px' }}></span></div>
                </div>
              </div>
          </div>
        </div>
        
          {/* Schedule Card section (In the third column) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <ScheduleCard />
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default App;
