
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Musics from "./pages/Musics";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={`main-content ${sidebarOpen ? "" : "sidebar-closed"}`}>
        <Routes>
          <Route path="/musics" element={<Musics />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
