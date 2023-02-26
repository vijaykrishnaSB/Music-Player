import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import Faviourte from "./Components/Favourite";
import Playlist from "./Components/Playlist";
import Home from "./Components/Home";

function App() {
  return (
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favourite" element={<Faviourte />} />
          <Route path="/Playlist" element={<Playlist />} />
        </Routes>
      </div>   
  );
}
export default App;