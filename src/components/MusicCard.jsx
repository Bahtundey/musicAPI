// MusicCard.jsx
import React from "react";
import "../App.css";

const MusicCard = ({ song }) => {
  return (
    <div className="music-card shadow-sm">
      <div className="music-img">
        <img src={song.songImg} alt={song.songTitle} />
      </div>

      <div className="music-body">
        <h5 className="song-title">{song.songTitle}</h5>
        <p className="song-artist">{song.songArtist}</p>

        <a href={song.songUrl} target="_blank" rel="noreferrer">
          <button className="btn btn-primary btn-sm w-100 mt-2 play-btn">
            ▶ Play on Spotify
          </button>
        </a>
      </div>
    </div>
  );
};

export default MusicCard;
