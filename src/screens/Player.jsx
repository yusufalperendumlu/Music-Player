import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../spotify";

import SongCard from "@/components/SongCard";
import Queue from "@/components/Queue";

const Player = () => {
  const location = useLocation();
  const [track, setTrack] = useState([]);
  const [currentTrack, setCurrentTruck] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentTrack);

  useEffect(() => {
    if (location.state) {
      apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
        setTrack(res.data.items);
        setCurrentTruck(res.data.items[0].track);
        console.log(res.data.items);
      });
    }
  }, [location.state]);

  return (
    <div className="w-[calc(100%-100px)] h-screen flex  overflow-x-hidden bg-[#1e2a3e] rounded-3xl bg-custom-gradient">
      <div className="w-4/6 h-full mr-4"></div>
      <div className="w-1/3 h-full flex flex-col justify-between">
        <SongCard album={currentTrack.album} />
        <Queue />
      </div>
    </div>
  );
};

export default Player;
