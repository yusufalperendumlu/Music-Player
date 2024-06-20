import { Routes, Route } from "react-router-dom";

import Sidebar from "@/components/Sidebar";

import Favorites from "@/screens/Favorites";
import Feed from "@/screens/Feed";
import Home from "@/screens/Home";
import Library from "@/screens/Library";
import Player from "@/screens/Player";
import Trending from "@/screens/Trending";

function App() {
  return (
    <>
      <div className="bg-orange-600 h-screen w-screen rounded-3xl overflow-hidden flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
