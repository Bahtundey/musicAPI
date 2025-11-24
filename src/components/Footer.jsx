
import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer-player">
      <div className="song-info">
        <strong>Playing Now:</strong> Song Title - Artist
      </div>
      <div className="player-controls">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>
    </div>
  );
};

export default Footer;
