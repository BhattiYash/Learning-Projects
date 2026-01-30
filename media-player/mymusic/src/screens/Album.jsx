import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const [getAlbum, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setLoading(false);
      return;
    }

    // OFFICIAL ENDPOINT for Liked Songs (User's Saved Tracks)
    fetch("https://api.spotify.com/v1/me/albums", {
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then((res) => {
      if (res.status === 401) {
        localStorage.removeItem("token");
        window.location.reload();
      }
      return res.json();
    })
    .then(data => {
      // In Saved Tracks, the track info is inside 'item.track'
      setAlbum(data || []);
      setLoading(false); // CRITICAL: Stop loading here
    })
    .catch(err => {
      console.error("Error fetching Liked Songs", err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="p-8 text-white">Loading your Albums...</div>;
   
  return (
    <div className="p-8 w-full overflow-y-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Albums</h1>

      {getAlbum.length === 0 ? (
        <p className="text-gray-400">No Albums found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getAlbum.map((item) => {
            // const track = item.track; // Extract track object fdfdf
            return (
              <div 
                key={item.id} 
                onClick={() => navigate("/player", { state: { id: item.id } })}
                className="bg-[#282828] p-4 rounded-lg hover:bg-[#383838] transition cursor-pointer group"
              >
                <img 
                  src={data.images?.[0]?.url || 'https://via.placeholder.com/150'} 
                  alt={data.name} 
                  className="w-full aspect-square object-cover rounded-md mb-4 shadow-lg"
                />
                <p className="text-white font-bold truncate">{data.name}</p> 
                <p className="text-gray-400 text-sm truncate">
                  {data.artists?.map(artist => artist.name).join(", ")}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}