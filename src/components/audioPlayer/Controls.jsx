import clsx from "clsx";
import React from "react";
import { IconContext } from "react-icons";
import { FaPause } from "react-icons/fa";
import { IoPlaySkipBack, IoPlaySkipForward, IoPlay } from "react-icons/io5";

const Controls = ({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
  total,
}) => {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#C4D0E3" }}>
      <div className="w-1/2 m-0 flex items-center justify-between">
        <div
          className="w-1/2 h-1/2  flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
          onClick={handlePrev}
        >
          <IoPlaySkipBack />
        </div>
        <div
          className={clsx(
            "w-[70px] h-[70px] rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out",
            isPlaying ? "" : ""
          )}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <IoPlay size={40} />}
        </div>
        <div
          className="w-1/2 h-1/2  flex items-center justify-center cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
          onClick={handleNext}
        >
          <IoPlaySkipForward />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Controls;
