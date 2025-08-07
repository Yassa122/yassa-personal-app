import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaEye, FaGlobe, FaDesktop, FaMobile, FaTablet, FaSignOutAlt, FaInfoCircle, FaDatabase } from 'react-icons/fa';
import AdminAuth from './AdminAuth';
import VisitorDetailModal from './VisitorDetailModal';
import { getVisitors, clearAllVisitors, getVisitorAnalytics } from '../firebase/visitorService';

const VisitorDashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('lastVisit');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    loadVisitors();
  }, []);

  useEffect(() => {
    // Filter and sort visitors whenever relevant state changes
    let filtered = visitors.filter(visitor =>
      visitor.userAgent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.referrer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visitor.url.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort visitors
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'lastVisit':
          aValue = new Date(a.lastVisit);
          bValue = new Date(b.lastVisit);
          break;
        case 'firstVisit':
          aValue = new Date(a.firstVisit);
          bValue = new Date(b.firstVisit);
          break;
        case 'visitCount':
          aValue = a.visitCount;
          bValue = b.visitCount;
          break;
        default:
          aValue = new Date(a.lastVisit);
          bValue = new Date(b.lastVisit);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredVisitors(filtered);
  }, [visitors, searchTerm, sortBy, sortOrder]);

  const loadVisitors = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getVisitors();
      if (result.success) {
        setVisitors(result.visitors);
      } else {
        setError('Failed to load visitors: ' + result.error);
        console.error('Failed to load visitors:', result.error);
      }
    } catch (error) {
      setError('Error loading visitors: ' + error.message);
      console.error('Error loading visitors:', error);
    } finally {
      setIsLoading(false);
    }
  };



  const getDeviceType = (userAgent) => {
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      return /iPad/.test(userAgent) ? 'tablet' : 'mobile';
    }
    return 'desktop';
  };

  const getDeviceIcon = (deviceType) => {
    switch (deviceType) {
      case 'mobile':
        return <FaMobile className="text-blue-400" />;
      case 'tablet':
        return <FaTablet className="text-green-400" />;
      default:
        return <FaDesktop className="text-purple-400" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const getAnalytics = () => {
    const totalVisitors = visitors.length;
    const totalVisits = visitors.reduce((sum, visitor) => sum + visitor.visitCount, 0);
    const uniqueVisitors = visitors.length;
    const deviceTypes = visitors.reduce((acc, visitor) => {
      const deviceType = getDeviceType(visitor.userAgent);
      acc[deviceType] = (acc[deviceType] || 0) + 1;
      return acc;
    }, {});

    return { totalVisitors, totalVisits, uniqueVisitors, deviceTypes };
  };

  const analytics = getAnalytics();

  const clearAllData = async () => {
    if (window.confirm('Are you sure you want to clear all visitor data? This cannot be undone.')) {
      try {
        const result = await clearAllVisitors();
        if (result.success) {
          setVisitors([]);
          setFilteredVisitors([]);
        } else {
          console.error('Failed to clear visitors:', result.error);
        }
      } catch (error) {
        console.error('Error clearing visitors:', error);
      }
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };

  const handleVisitorClick = (visitor) => {
    setSelectedVisitor(visitor);
    setIsDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setIsDetailModalOpen(false);
    setSelectedVisitor(null);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(visitors, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-visitors-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-black text-stone-300 px-6 py-10">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">Portfolio Analytics Dashboard</h1>
            <p className="text-stone-400">Track and analyze your portfolio visitors</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
          >
            <FaSignOutAlt size={16} />
            Logout
          </button>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-zinc-900/30 border border-zinc-700 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-400 text-sm">Total Visitors</p>
                <p className="text-3xl font-bold text-stone-300">{analytics.totalVisitors}</p>
              </div>
              <FaUsers className="text-4xl text-blue-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/30 border border-zinc-700 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-400 text-sm">Total Visits</p>
                <p className="text-3xl font-bold text-stone-300">{analytics.totalVisits}</p>
              </div>
              <FaEye className="text-4xl text-green-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/30 border border-zinc-700 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-400 text-sm">Unique Visitors</p>
                <p className="text-3xl font-bold text-stone-300">{analytics.uniqueVisitors}</p>
              </div>
              <FaGlobe className="text-4xl text-purple-400" />
            </div>
          </motion.div>

          <motion.div
            className="bg-zinc-900/30 border border-zinc-700 p-6 rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-stone-400 text-sm">Device Types</p>
                <div className="flex gap-2 mt-2">
                  {Object.entries(analytics.deviceTypes).map(([device, count]) => (
                    <div key={device} className="flex items-center gap-1">
                      {getDeviceIcon(device)}
                      <span className="text-sm">{count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search visitors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-zinc-900/30 border border-zinc-700 rounded-lg text-stone-300 placeholder-stone-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-zinc-900/30 border border-zinc-700 rounded-lg text-stone-300 focus:outline-none focus:border-teal-500"
            >
              <option value="lastVisit">Last Visit</option>
              <option value="firstVisit">First Visit</option>
              <option value="visitCount">Visit Count</option>
            </select>

            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-4 py-2 bg-zinc-900/30 border border-zinc-700 rounded-lg text-stone-300 hover:bg-zinc-800/50 transition-colors"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={loadVisitors}
              disabled={isLoading}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-lg text-white transition-colors flex items-center gap-2"
            >
              <FaDatabase size={16} />
              {isLoading ? 'Loading...' : 'Refresh'}
            </button>
            <button
              onClick={exportData}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-lg text-white transition-colors"
            >
              Export Data
            </button>
            <button
              onClick={clearAllData}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="mb-6 p-4 bg-blue-900/30 border border-blue-700 rounded-lg">
            <p className="text-blue-400 text-sm">Loading visitor data...</p>
          </div>
        )}

        {/* Visitors Table */}
        <div className="bg-zinc-900/30 border border-zinc-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Device</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">IP & Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Browser & OS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Visits</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">First Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Last Visit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Referrer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-700">
                {filteredVisitors.map((visitor, index) => (
                  <motion.tr
                    key={visitor.fingerprint}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-zinc-800/30 transition-colors cursor-pointer"
                    onClick={() => handleVisitorClick(visitor)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {getDeviceIcon(getDeviceType(visitor.userAgent))}
                        <div>
                          <div className="text-sm font-medium text-stone-300">
                            {getDeviceType(visitor.userAgent)}
                          </div>
                          <div className="text-xs text-stone-500">
                            {visitor.screenResolution}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-stone-300">
                          {visitor.ipAddress || 'Unknown'}
                        </div>
                        <div className="text-xs text-stone-500">
                          {visitor.location || visitor.timezone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-stone-300">
                          {visitor.browser || 'Unknown'} {visitor.browserVersion || ''}
                        </div>
                        <div className="text-xs text-stone-500">
                          {visitor.os || 'Unknown'} {visitor.osVersion || ''}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-stone-300">{visitor.visitCount}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-stone-300">{formatDate(visitor.firstVisit)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-stone-300">{formatDate(visitor.lastVisit)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-stone-300 max-w-xs truncate">
                        {visitor.referrer}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredVisitors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-400">No visitors found</p>
          </div>
        )}

        {/* Detail Modal */}
        <VisitorDetailModal
          visitor={selectedVisitor}
          isOpen={isDetailModalOpen}
          onClose={closeDetailModal}
        />
      </motion.div>
    </div>
  );
};

export default VisitorDashboard; 