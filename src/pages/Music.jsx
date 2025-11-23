// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MusicCard from './components/MusicCard';
import './App.css';


function Music () {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE =  'http://localhost:3500';

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await axios.get(`${API_BASE}/music`);
        setMusic(res.data.data || []);
      } catch (err) {
        console.error('Failed to load music:', err.message || err);
      } finally {
        setLoading(false);
      }
    };
    fetchMusic();
  }, [API_BASE]);

  if (loading) return <div className="center">Loading music...</div>;

  return (
    <div className="app">
      <header className="header">
        <h1>Music Library</h1>
      </header>

      <main className="grid">
        {music.map((m) => (
          <MusicCard key={m.id} item={m} />
        ))}
      </main>

      <footer className="footer">Demo Music API — local development</footer>
    </div>
  );
}

export default Music;
