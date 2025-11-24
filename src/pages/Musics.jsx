
import React, { useEffect, useState } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";
import "../App.css";

const Musics = () => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playingId, setPlayingId] = useState(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const res = await axios.get("https://prac-0o8f.onrender.com/musics");
        
        console.log("BACKEND RESPONSE:", res.data);

        const list =
          res.data.musicAPI ||
          res.data.data ||
          res.data.musics ||
          res.data.music ||
          res.data ||
          [];

        setMusic(list);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching music:", error);
        setMusic([]);
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);


  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 title">bigDev</h1>
  
      {loading ? (
        <p className="loading">Loading music...</p>
      ) : (
        <>
          {/* Featured Song */}
          {music.length > 0 && (
            <div className="featured-card mb-4">
              <h2>{music[0].songTitle}</h2>
              <p>{music[0].songArtist}</p>
              <a href={music[0].songUrl} target="_blank" rel="noreferrer">
                <button className="btn btn-light btn-sm mt-2">▶ Play</button>
              </a>
            </div>
          )}
  
          {/* Remaining Songs Grid */}
          <div className="music-grid">
            {music.slice(1).map((song) => (
              <MusicCard key={song.id} song={song} />
            ))}
          </div>
        </>
      )}
    </div>
  );
  
  
};

export default Musics;
