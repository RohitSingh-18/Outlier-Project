import { useState } from 'react';
import { ArrowPathIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const deviceTypes = [
  { id: 'smartwatch', name: 'Smartwatch' },
  { id: 'fitness-band', name: 'Fitness Band' },
  { id: 'heart-monitor', name: 'Heart Monitor' },
  { id: 'smart-ring', name: 'Smart Ring' },
];

const WearableSyncCard = () => {
  const [selectedDevice, setSelectedDevice] = useState(deviceTypes[0].id);
  const [isConnected] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(new Date());

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setLastSynced(new Date());
    }, 1500);
  };

  return (
    <div className="wearable-sync-card">
      <div className="wearable-sync-header">
        <span className={`wearable-sync-status ${isConnected ? 'connected' : 'disconnected'}`}>{isConnected ? <CheckCircleIcon /> : <XCircleIcon />}</span>
        <span className="wearable-sync-title">Wearable Sync</span>
      </div>
      <div className="wearable-sync-body">
        <label className="wearable-sync-label">Device Type</label>
        <select
          className="wearable-sync-select"
          value={selectedDevice}
          onChange={e => setSelectedDevice(e.target.value)}
        >
          {deviceTypes.map((d) => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <button
          className="wearable-sync-btn"
          onClick={handleSync}
          disabled={isSyncing}
        >
          {isSyncing ? <ArrowPathIcon className="spin" /> : <ArrowPathIcon />}
          {isSyncing ? 'Syncing...' : 'Sync Now'}
        </button>
        <div className="wearable-sync-meta">
          <span className={isConnected ? 'connected' : 'disconnected'}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
          <span className="wearable-sync-last">Last synced: {lastSynced.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default WearableSyncCard; 