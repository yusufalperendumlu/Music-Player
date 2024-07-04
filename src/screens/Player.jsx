import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../spotify";

const Player = () => {
  const location = useLocation();
  const [track, setTrack] = useState([]);
  const [currentTrack, setCurrentTruck] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
        setTrack(res.data.items);
        setCurrentTruck(res.data.items[0].track);
      });
    }
  }, [location.state]);

  return (
    <div className="w-[calc(100%-100px)] h-screen overflow-x-hidden bg-[#1e2a3e] rounded-3xl bg-custom-gradient">
      <div></div>
      <div></div>
    </div>
  );
};

export default Player;
