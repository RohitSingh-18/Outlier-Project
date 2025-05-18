import { useState } from 'react';
import { ArrowPathIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import smartwatchImage from '../assets/black-smartwatch-displaying-heart-rate-data-fitness-tracker-technology_84443-34396.png';
import fitnessBandImage from '../assets/fitness band.png';
import heartMonitorImage from '../assets/heart monitor.png';
import smartRingImage from '../assets/smart ring.png';

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

  const deviceImages: { [key: string]: string } = {
    'smartwatch': smartwatchImage,
    'fitness-band': fitnessBandImage,
    'heart-monitor': heartMonitorImage,
    'smart-ring': smartRingImage,
  };

  return (
    <div className="wearable-sync-card">
      <div className="wearable-sync-header">
        <span className={`wearable-sync-status ${isConnected ? 'connected' : 'disconnected'}`}>{isConnected ? <CheckCircleIcon /> : <XCircleIcon />}</span>
        <div className="card-title">
          <h2>Wearable Sync</h2>
        </div>
      </div>
      <div className="smartwatch-container">
        <div className="pulsating-circles-container">
          <div className="pulsating-circle inner-circle"></div>
          <div className="pulsating-circle outer-circle"></div>
        </div>
        <img
          src={deviceImages[selectedDevice]}
          alt="Wearable Device"
          className="smartwatch-image"
        />
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