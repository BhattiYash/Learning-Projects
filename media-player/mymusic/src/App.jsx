import React, { useEffect, useState } from 'react';
import './App.css'

// --- CONFIGURATION ---
const clientId = 'c54b4942fcd549d899d529ba7baf6d0e'; // Replace with your Client ID
const redirectUri = 'http://127.0.0.1:5173'; // Must match your Spotify Dashboard settings
const scope = 'user-read-private user-read-email'; // Add scopes as needed
const authUrl = new URL("https://accounts.spotify.com/authorize");

// --- UTILITY FUNCTIONS FOR PKCE ---
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

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        // 1. Exchange the code for an Access Token
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

        const response = await fetch("https://accounts.spotify.com/api/token", payload);
        const data = await response.json();
        
        if (data.access_token) {
          setToken(data.access_token);
          // Clean up the URL
          window.history.replaceState({}, document.title, "/");
        }
      }
    };

    handleCallback();
  }, []);

  const loginWithSpotify = async () => {
    // 1. Generate PKCE values
    const codeVerifier = generateRandomString(64);
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);

    // 2. Store verifier for the callback step
    window.localStorage.setItem('code_verifier', codeVerifier);

    // 3. Redirect to Spotify
    const params = {
      response_type: 'code',
      client_id: clientId,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  };
async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
    const profile = fetchProfile(token);
    console.log(profile); 
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Spotify React Auth (Frontend Only)</h1>
      {!token ? (
        <button onClick={loginWithSpotify} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Login with Spotify
        </button>
      ) : (
        <div>
          <p>Logged in successfully!</p>
          <p style={{ wordBreak: 'break-all' }}><b>Token:</b> {token}</p>
          <p></p>
        </div>
      )}
    </div>
  );
}

export default App;