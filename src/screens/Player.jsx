import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiClient } from "../../spotify";

import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import SongCard from "@/components/SongCard";
import Queue from "@/components/Queue";

const Player = () => {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(tracks);

  useEffect(() => {
    if (location.state) {
      apiClient.get(`/playlists/${location.state?.id}/tracks`).then((res) => {
        setTracks(res?.data?.items);
        setCurrentTrack(res?.data?.items[0]?.track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  console.log(currentTrack);

  return (
    <div className="w-[calc(100%-100px)] h-screen flex  overflow-x-hidden bg-[#1e2a3e] rounded-3xl bg-custom-gradient">
      <div className="w-4/6 h-full mr-4">
        <AudioPlayer currentTrack={currentTrack} />
      </div>
      <div className="w-1/3 h-full flex flex-col justify-between fixed right-0 overflow-y-scroll">
        <SongCard album={currentTrack} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
