import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDesktop, FaMobile, FaTablet, FaGlobe, FaNetworkWired, FaMicrochip, FaMemory, FaEye } from 'react-icons/fa';

const VisitorDetailModal = ({ visitor, isOpen, onClose }) => {
    if (!visitor) return null;

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

    const InfoSection = ({ title, icon, children }) => (
        <div className="bg-zinc-900/30 border border-zinc-700 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
                {icon}
                <h3 className="text-lg font-semibold text-stone-300">{title}</h3>
            </div>
            {children}
        </div>
    );

    const InfoRow = ({ label, value }) => (
        <div className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0">
            <span className="text-stone-400 text-sm">{label}</span>
            <span className="text-stone-300 text-sm font-medium">{value || 'Unknown'}</span>
        </div>
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-zinc-700">
                            <div className="flex items-center gap-3">
                                {getDeviceIcon(visitor.deviceType)}
                                <div>
                                    <h2 className="text-xl font-bold text-stone-300">Visitor Details</h2>
                                    <p className="text-stone-400 text-sm">Fingerprint: {visitor.fingerprint}</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-stone-400 hover:text-stone-300 transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Basic Information */}
                            <InfoSection title="Basic Information" icon={<FaEye className="text-blue-400" />}>
                                <div className="space-y-2">
                                    <InfoRow label="Visit Count" value={visitor.visitCount} />
                                    <InfoRow label="First Visit" value={formatDate(visitor.firstVisit)} />
                                    <InfoRow label="Last Visit" value={formatDate(visitor.lastVisit)} />
                                    <InfoRow label="Referrer" value={visitor.referrer} />
                                    <InfoRow label="URL" value={visitor.url} />
                                    <InfoRow label="Language" value={visitor.language} />
                                    <InfoRow label="Timezone" value={visitor.timezone} />
                                </div>
                            </InfoSection>

                            {/* Device Information */}
                            <InfoSection title="Device Information" icon={<FaDesktop className="text-purple-400" />}>
                                <div className="space-y-2">
                                    <InfoRow label="Device Type" value={visitor.deviceType} />
                                    <InfoRow label="Screen Resolution" value={visitor.screenResolution} />
                                    <InfoRow label="Viewport" value={visitor.viewport} />
                                    <InfoRow label="Color Depth" value={visitor.colorDepth} />
                                    <InfoRow label="Pixel Depth" value={visitor.pixelDepth} />
                                    <InfoRow label="Device Pixel Ratio" value={visitor.devicePixelRatio} />
                                    <InfoRow label="Touch Support" value={visitor.touchSupport ? 'Yes' : 'No'} />
                                    <InfoRow label="WebGL Support" value={visitor.webGLSupport ? 'Yes' : 'No'} />
                                    <InfoRow label="Service Worker Support" value={visitor.serviceWorkerSupport ? 'Yes' : 'No'} />
                                </div>
                            </InfoSection>

                            {/* Browser & OS Information */}
                            <InfoSection title="Browser & Operating System" icon={<FaGlobe className="text-green-400" />}>
                                <div className="space-y-2">
                                    <InfoRow label="Browser" value={visitor.browser} />
                                    <InfoRow label="Browser Version" value={visitor.browserVersion} />
                                    <InfoRow label="Operating System" value={visitor.os} />
                                    <InfoRow label="OS Version" value={visitor.osVersion} />
                                    <InfoRow label="Platform" value={visitor.platform} />
                                    <InfoRow label="Vendor" value={visitor.vendor} />
                                    <InfoRow label="User Agent" value={visitor.userAgent} />
                                    <InfoRow label="Cookie Enabled" value={visitor.cookieEnabled ? 'Yes' : 'No'} />
                                    <InfoRow label="Do Not Track" value={visitor.doNotTrack || 'Not Set'} />
                                    <InfoRow label="Online Status" value={visitor.onLine ? 'Online' : 'Offline'} />
                                </div>
                            </InfoSection>

                            {/* Hardware Information */}
                            <InfoSection title="Hardware Information" icon={<FaMicrochip className="text-orange-400" />}>
                                <div className="space-y-2">
                                    <InfoRow label="CPU Cores" value={visitor.cpuCores} />
                                    <InfoRow label="Memory" value={visitor.memory} />
                                    {visitor.connection && (
                                        <>
                                            <InfoRow label="Connection Type" value={visitor.connection.effectiveType} />
                                            <InfoRow label="Download Speed" value={`${visitor.connection.downlink} Mbps`} />
                                            <InfoRow label="Round Trip Time" value={`${visitor.connection.rtt} ms`} />
                                        </>
                                    )}
                                </div>
                            </InfoSection>

                            {/* Network & Location Information */}
                            <InfoSection title="Network & Location" icon={<FaNetworkWired className="text-cyan-400" />}>
                                <div className="space-y-2">
                                    <InfoRow label="IP Address" value={visitor.ipAddress} />
                                    <InfoRow label="Location" value={visitor.location} />
                                    <InfoRow label="Country" value={visitor.country} />
                                    <InfoRow label="Region" value={visitor.region} />
                                    <InfoRow label="City" value={visitor.city} />
                                    <InfoRow label="ISP" value={visitor.isp} />
                                    <InfoRow label="Latitude" value={visitor.latitude} />
                                    <InfoRow label="Longitude" value={visitor.longitude} />
                                </div>
                            </InfoSection>

                            {/* Visit History */}
                            {visitor.visits && visitor.visits.length > 0 && (
                                <InfoSection title="Visit History" icon={<FaMemory className="text-yellow-400" />}>
                                    <div className="space-y-2 max-h-40 overflow-y-auto">
                                        {visitor.visits.map((visit, index) => (
                                            <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0">
                                                <div>
                                                    <div className="text-stone-300 text-sm font-medium">
                                                        Visit {index + 1}
                                                    </div>
                                                    <div className="text-stone-500 text-xs">
                                                        {formatDate(visit.timestamp)}
                                                    </div>
                                                </div>
                                                <div className="text-stone-400 text-xs text-right">
                                                    <div>{visit.url}</div>
                                                    <div>From: {visit.referrer}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </InfoSection>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VisitorDetailModal; 