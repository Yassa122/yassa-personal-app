import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const AdminAuth = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // You can change this password to whatever you want
  const ADMIN_PASSWORD = 'yassa2024';

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        // Store authentication in sessionStorage (will be cleared when browser is closed)
        sessionStorage.setItem('adminAuthenticated', 'true');
        onAuthSuccess();
      } else {
        setError('Incorrect password. Please try again.');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-stone-300 flex items-center justify-center px-6">
      <motion.div
        className="max-w-md w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-zinc-900/30 border border-zinc-700 p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FaLock className="text-4xl text-teal-400" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Admin Access</h1>
            <p className="text-stone-400">Enter password to view visitor analytics</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-900/30 border border-zinc-700 rounded-lg text-stone-300 placeholder-stone-500 focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Enter admin password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-300 transition-colors"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div
                className="text-red-400 text-sm text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-800 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors"
            >
              {isLoading ? 'Checking...' : 'Access Dashboard'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-stone-500">
              This dashboard is protected and only accessible to the portfolio owner.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminAuth; 