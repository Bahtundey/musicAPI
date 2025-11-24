
import React from "react";
import "../App.css";

const MusicCard = ({ song }) => {
  if (!song) return null;

  return (
    <div className="music-card shadow-sm">
      <div className="music-img">
        {song.songImg ? (
         <img
         src={song.songImg || "https://via.placeholder.com/300"}
         alt={song.songTitle}
       />
       
        ) : (
          <div className="skeleton-img"></div>
        )}
      </div>

      <div className="music-body">
        <h5 className="song-title">{song.songTitle || "Unknown Title"}</h5>
        <p className="song-artist">{song.songArtist || "Unknown Artist"}</p>

        {song.songUrl && (
          <a href={song.songUrl} target="_blank" rel="noreferrer">
            <button className="btn play-btn w-100">
              ▶ Play on Spotify
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default MusicCard;
