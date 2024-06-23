import { Routes, Route } from "react-router-dom";

import Sidebar from "@/components/Sidebar";

import Favorites from "@/screens/Favorites";
import Feed from "@/screens/Feed";
import Home from "@/screens/Home";
import Library from "@/screens/Library";
import Player from "@/screens/Player";
import Trending from "@/screens/Trending";
import Login from "@/screens/auth/Login";
import { useEffect, useState } from "react";

import setClientToken from "../spotify";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
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
  );
}

export default App;
