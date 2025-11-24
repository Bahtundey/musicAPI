// components/Sidebar.jsx
import React, { useState } from "react";
import "../App.css";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? "«" : "»"}
      </button>
      <div className="sidebar-brand">
        <h2>bigDev</h2>
      </div>
      <ul className="sidebar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Your Library</a></li>
      </ul>
      <hr />
      <ul className="sidebar-playlists">
        <li><a href="#">Playlist 1</a></li>
        <li><a href="#">Playlist 2</a></li>
        <li><a href="#">Playlist 3</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
