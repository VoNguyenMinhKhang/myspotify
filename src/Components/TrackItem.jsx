import React from 'react';

const TrackItem = ({ track }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>{track.name}</h2>
      <p>Artist: {track.artists.map(artist => artist.name).join(', ')}</p>
      <img src={track.album.images[0]?.url} alt={track.name} style={{ width: '100px' }} />
      {track.preview_url ? (
        <audio controls>
          <source src={track.preview_url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No preview available for this track.</p>
      )}
    </div>
  );
};

export default TrackItem;
