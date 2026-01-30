import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Remove all auth data from LocalStorage
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("code_verifier");

    // 2. Optional: If you saved user profile info, clear that too
    // window.localStorage.clear(); // Use this to wipe everything if preferred

    // 3. Small delay to ensure the UI feels smooth, then redirect
    const timer = setTimeout(() => {
        // We use window.location instead of navigate if we want a full page refresh
        // to reset the entire app state.
        window.location.href = "/"; 
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#1e1e1e] text-white">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-500 mb-4"></div>
      <h1 className="text-2xl font-bold">Signing you out...</h1>
      <p className="text-gray-400">Cleaning up your session.</p>
    </div>
  );
}