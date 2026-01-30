import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Library() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setLoading(false);
      return;
    }

    // REAL SPOTIFY API ENDPOINT
    fetch("https://api.spotify.com/v1/me/playlists", {
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      if (res.status === 401) { // Token expired
        localStorage.removeItem("token");
        window.location.reload();
      }
      return res.json();
    })
    .then(data => {
      setPlaylists(data.items || []);
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching playlists", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-white">Loading your music...</div>;

  return (
    <div className="p-8 w-full">
      <h1 className="text-3xl font-bold text-white mb-6">Your Library</h1>
      
      {playlists.length === 0 ? (
        <p className="text-gray-400">No playlists found or connection error.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              onClick={() => navigate("/player", { state: { id: playlist.id } })}
              className="bg-[#282828] p-4 rounded-lg hover:bg-[#383838] transition cursor-pointer group"
            >
              <img 
                src={playlist.images?.[0]?.url || 'https://via.placeholder.com/150'} 
                alt={playlist.name} 
                className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg"
              />
              <p className="text-white font-bold truncate">{playlist.name}</p>
              <p className="text-gray-400 text-sm">{playlist.tracks.total} Songs</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}