import React, { useState } from 'react';
import ResponsiveIframe from './ResponsiveIframe';
import Home from './Home';

const PortfolioWrapper = () => {
    const [viewportWidth, setViewportWidth] = useState(1220);

    return (
        <div className="min-h-screen bg-dark-grey text-white p-8">
            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={() => setViewportWidth(375)}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                    Mobile
                </button>
                <button
                    onClick={() => setViewportWidth(768)}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                    Tablet
                </button>
                <button
                    onClick={() => setViewportWidth(1220)}
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                >
                    Desktop
                </button>
            </div>
            <ResponsiveIframe src={window.location.href} width={viewportWidth} />
        </div>
    );
};

export default PortfolioWrapper;
