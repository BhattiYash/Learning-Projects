import React, { useState, useEffect } from 'react';

const clientId = 'c54b4942fcd549d899d529ba7baf6d0e'; 
const redirectUri = 'http://127.0.0.1:5173'; 
const scope = 'user-read-private user-read-email playlist-read-private user-library-read';

// PKCE Helpers (Keep these as they are)
const generateRandomString = (length) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = window.crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
}
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}
const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

const Login = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        setLoading(true);
        const codeVerifier = localStorage.getItem('code_verifier');
        
        const payload = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            client_id: clientId,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
          }),
        };

        try {
          // REAL SPOTIFY TOKEN ENDPOINT
          const response = await fetch("https://accounts.spotify.com/api/token", payload);
          const data = await response.json();
          
          if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            window.history.replaceState({}, document.title, "/");
            window.location.reload(); 
          }
        } catch (error) {
          console.error("Login failed", error);
        } finally {
          setLoading(false);
        }
      }
    };
    handleCallback();
  }, []);

  const loginWithSpotify = async () => {
    const codeVerifier = generateRandomString(64);
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);

    window.localStorage.setItem('code_verifier', codeVerifier);

    const params = {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };

    // FIXED URL: Added '?' and removed extra brace
    const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams(params).toString()}`;
    window.location.href = authUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-extrabold mb-8 text-violet-500">MyMusic</h1>
      <button onClick={loginWithSpotify} className="bg-[#1DB954] text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
        {loading ? "Authenticating..." : "Login with Spotify"}
      </button>
    </div>
  );
}

export default Login;