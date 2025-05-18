import Layout from './components/Layout';
import MetricsGrid from './components/MetricsGrid';
import DashboardHero from './components/DashboardHero';
import ScheduleCard from './components/ScheduleCard';
import WearableSyncCard from './components/WearableSyncCard';
import HeartStatisticCard from './components/HeartStatisticCard';

function App() {
  return (
    <Layout>
      {/* Heading and subheading below navbar */}
      <DashboardHero style={{ marginBottom: 32 }}/>

      {/* Top section: 2x2 grid, Wearable Sync, and Heart Stats in a single row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginBottom: 32, alignItems: 'stretch' }}> {/* Changed alignItems to stretch */}
        {/* Left column: 2x2 Metrics Grid */}
        <MetricsGrid />

        {/* Middle column: Wearable Sync Card */}
        <WearableSyncCard />

        {/* Right column: Heart Statistic Card */}
        <HeartStatisticCard />
      </div>

      {/* Rest of the dashboard items below (original placeholder cards and ScheduleCard) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        
         {/* ScheduleCard was in the right column, moving it below the new 3-column grid */}
        <ScheduleCard /> 

      </div>
    </Layout>
  );
}

export default App;
