import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../spotify";

const Player = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
        console.log(res.data);
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
