import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import PlaylistTracks from './Components/PlaylistTracks';
import useAuth from './hooks/useAuth';

const App = () => {
  useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/playlist" element={<PlaylistTracks />} />
    </Routes>
  );
};

export default App;
