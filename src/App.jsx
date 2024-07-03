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

import setClientToken, { apiClient } from "../spotify";

function App() {
  const [token, setToken] = useState("");

  const apiClientHandler = async () => {
    try {
      const response = await apiClient.get("/me");
      if (response.status !== 200) {
        localStorage.removeItem("token");
        setToken("");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

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
    apiClientHandler();
  }, []);

  return !token ? (
    <Login />
  ) : (
    <div className="bg-orange-600 h-screen w-screen rounded-3xl overflow-x-hidden scroll-auto">
      <Sidebar />
      <div className="flex items-center justify-end overflow-x-hidden ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/library" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
