import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const ICPLogin = () => {
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const initAuthClient = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);
      if (await client.isAuthenticated()) {
        setIsAuthenticated(true);
      }
    };
    initAuthClient();
  }, []);

  const handleLogin = async () => {
    if (authClient) {
      await authClient.login({
        identityProvider: "https://identity.ic0.app",
        onSuccess: () => {
          setIsAuthenticated(true);
        },
        onError: (error) => {
          console.error("Login Failed: ", error);
        },
      });
    }
  };

  const handleLogout = async () => {
    if (authClient) {
      await authClient.logout();
      setIsAuthenticated(false);
    }
  };

  return (
    <div className="icp-login-section text-center">
      {isAuthenticated ? (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Welcome to Sandile Energies</h3>
          <button onClick={handleLogout} className="bg-red-600 text-white px-6 py-3 rounded-md">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Login with Internet Identity</h3>
          <button onClick={handleLogin} className="bg-blue-600 text-white px-6 py-3 rounded-md">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default ICPLogin;
