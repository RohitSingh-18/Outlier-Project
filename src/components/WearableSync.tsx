import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const deviceTypes = [
  { id: 'smartwatch', name: 'Smartwatch' },
  { id: 'fitness-band', name: 'Fitness Band' },
  { id: 'heart-monitor', name: 'Heart Monitor' },
  { id: 'smart-ring', name: 'Smart Ring' },
];

const WearableSync = () => {
  const [selectedDevice, setSelectedDevice] = useState(deviceTypes[0].id);
  const [isConnected, setIsConnected] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSynced, setLastSynced] = useState(new Date());

  const handleSync = () => {
    setIsSyncing(true);
    // Simulate sync process
    setTimeout(() => {
      setIsSyncing(false);
      setLastSynced(new Date());
    }, 2000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Wearable Sync</h2>
      
      {/* Device Selection */}
      <div className="mb-4">
        <label htmlFor="device-select" className="block text-sm font-medium text-gray-700 mb-1">
          Device Type
        </label>
        <select
          id="device-select"
          value={selectedDevice}
          onChange={(e) => setSelectedDevice(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          {deviceTypes.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name}
            </option>
          ))}
        </select>
      </div>

      {/* Sync Button */}
      <button
        onClick={handleSync}
        disabled={isSyncing}
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed"
      >
        {isSyncing ? (
          <>
            <ArrowPathIcon className="animate-spin mr-2 h-5 w-5" />
            Syncing...
          </>
        ) : (
          <>
            <ArrowPathIcon className="mr-2 h-5 w-5" />
            Sync Now
          </>
        )}
      </button>

      {/* Status Display */}
      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isConnected ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-sm text-gray-600">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
        <div className="text-sm text-gray-600">
          Last synced: {lastSynced.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default WearableSync; 