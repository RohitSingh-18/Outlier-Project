import Layout from './components/Layout';
import MetricsGrid from './components/MetricsGrid';
import DashboardHero from './components/DashboardHero';
import ScheduleCard from './components/ScheduleCard';
import WearableSyncCard from './components/WearableSyncCard';
import HeartStatisticCard from './components/HeartStatisticCard';

function App() {
  return (
    <Layout>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: 32, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <DashboardHero />
          <MetricsGrid />
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Placeholder cards for the dashboard */}
            <div className="card">
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 16 }}>Heart Rate</h2>
              <div style={{ height: 180, background: '#f4f6fa', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Chart coming soon
              </div>
            </div>
            <div className="card">
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 16 }}>Activity</h2>
              <div style={{ height: 180, background: '#f4f6fa', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Chart coming soon
              </div>
            </div>
            <div className="card">
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 16 }}>Sleep</h2>
              <div style={{ height: 180, background: '#f4f6fa', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Chart coming soon
              </div>
            </div>
          </div>
        </div>
         <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>
          <HeartStatisticCard />
          <WearableSyncCard />
          <ScheduleCard />
        </div>
      </div>
    </Layout>
  );
}

export default App;
