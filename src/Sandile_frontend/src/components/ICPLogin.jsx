import React, { useEffect, useState } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const ICPLogin = () => {
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const initAuthClient = async () => {
      try {
        const client = await AuthClient.create();
        setAuthClient(client);
        if (await client.isAuthenticated()) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error("Initialization Failed: ", err);
        setError("Failed to initialize authentication. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    initAuthClient();
  }, []);

  const handleLogin = async () => {
    if (authClient) {
      try {
        setIsLoading(true);
        await authClient.login({
          identityProvider: "https://identity.ic0.app",
          onSuccess: () => {
            setIsAuthenticated(true);
            setError(null);
          },
          onError: (error) => {
            console.error("Login Failed: ", error);
            setError("Login failed. Please try again.");
          },
        });
      } catch (err) {
        setError("An unexpected error occurred during login.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogout = async () => {
    if (authClient) {
      try {
        await authClient.logout();
        setIsAuthenticated(false);
      } catch (err) {
        console.error("Logout Failed: ", err);
        setError("Logout failed. Please try again.");
      }
    }
  };

  // Show a loading state while initializing
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center">
        <h3 className="text-xl font-semibold text-gray-800">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="icp-login-section text-center">
      {error && (
        <p className="text-red-600 font-semibold mb-4">
          {error}
        </p>
      )}
      {isAuthenticated ? (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Welcome to Sandile Energies</h3>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 text-white px-6 py-3 rounded-md transition duration-300 hover:bg-red-700 hover:scale-110"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button 
            onClick={handleLogin} 
            className="bg-white text-[#005bbb] px-8 py-3 border-2 border-[#005bbb] rounded-md transition duration-300 hover:scale-110 hover:bg-[#005bbb] hover:text-white"
          >
            Login with Internet Identity
          </button>
        </div>
      )}
    </div>
  );
};

export default ICPLogin;
