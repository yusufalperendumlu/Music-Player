import Controls from "@/components/audioPlayer/Controls";
import ProgressCircle from "@/components/audioPlayer/ProgressCircle";
import WaveAnimation from "@/components/audioPlayer/WaveAnimation";
import { useEffect, useRef, useState } from "react";

const AudioPlayer = ({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  let audioSrc = total[currentIndex]?.track?.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track?.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  console.log(audioRef);

  const stratTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        stratTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        stratTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      stratTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex === total.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const artists = [];
  currentTrack?.artists?.forEach((e) => {
    artists.push(e.name);
  });

  return (
    <div className="w-full h-1/2 flex flex-row my-4">
      <div className="w-2/5 ml-4">
        <ProgressCircle
          color="#C96850"
          isPlaying={isPlaying}
          image={currentTrack?.album?.images[0]?.url}
          size={300}
          percentage={currentPercentage}
        />
      </div>
      <div className="w-3/5 flex flex-col items-center justify-around">
        <p className="flex h-fit p-4 items-center justify-center  text-center text-6xl font-semibold m-0 text-[#c4d0e3] overflow-hidden display-web">
          {currentTrack?.name}
        </p>
        <p className="text-[#9aa9c2] text-sm font-medium mt-8">
          {artists.join(", ")}
        </p>

        <div className="flex items-center w-full flex-col">
          <div className="w-1/2 flex justify-between mb-5">
            <p className="text-xl flex items-center font-bold m-0 text-[#c4d0e3]">
              {new Date(trackProgress * 1000).toISOString().substring(14, 19)}
            </p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="text-xl flex items-center font-bold m-0 text-[#c4d0e3]">
              {currentTrack?.duration_ms
                ? new Date(currentTrack?.duration_ms)
                    .toISOString()
                    .substring(14, 19)
                : "0:00"}
            </p>
          </div>
          <Controls
            handleNext={handleNext}
            handlePrev={handlePrev}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
