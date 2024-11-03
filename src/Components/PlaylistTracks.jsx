import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrackItem from './TrackItem';

const PlaylistTracks = () => {
  const [tracks, setTracks] = useState([]);
  const playlistId = '54ZA9LXFvvFujmOVWXpHga'; // Sử dụng playlist ID bạn đã cung cấp

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      const token = localStorage.getItem('spotify_token');
      if (token) {
        try {
          const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setTracks(response.data.items);
        } catch (error) {
          console.error('Error fetching playlist tracks:', error);
        }
      }
    };

    fetchPlaylistTracks();
  }, [playlistId]);

  return (
    <div>
      <h1>Tracks in Playlist</h1>
      {tracks.length > 0 ? (
        tracks.map((item, index) => (
          <TrackItem key={index} track={item.track} />
        ))
      ) : (
        <p>No tracks found in this playlist.</p>
      )}
    </div>
  );
};

export default PlaylistTracks;
