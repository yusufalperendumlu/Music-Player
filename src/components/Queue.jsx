import "../index.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";

const Queue = ({ tracks, setCurrentIndex }) => {
  const [currentMusic, setCurrentMusic] = useState(0);
  const tracksRefs = useRef([]);

  const handleQueueClick = (index) => {
    tracksRefs.current[index].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    setCurrentIndex(index);
    setCurrentMusic(index);
  };

  return (
    <div className="w-full h-full rounded-3xl rounded-tr-none bg-[#071838b8] opacity-100  flex flex-col items-center justify-center">
      <div className="w-3/5 h-4/5 flex flex-col justify-between">
        <p className="text-2xl font-bold text-white align-baseline">Up Next</p>
        <div className="h-auto overflow-y-auto custom-scrollbar">
          {tracks?.map((track, index) => (
            <div
              key={track.track.id}
              className={clsx(
                "w-full h-16 flex items-center justify-between my-2  rounded-full cursor-pointer transition-all duration-100 ease-in-out hover:bg-[#000000] hover:opacity-80 ",
                index === currentMusic
                  ? "bg-[#000000] opacity-80"
                  : "bg-[#26324a37]"
              )}
              onClick={() => handleQueueClick(index)}
              ref={(el) => (tracksRefs.current[index] = el)}
            >
              <div className="flex items-center justify-between relative w-4/5">
                <img
                  src={track.track.album.images[0].url}
                  alt="album"
                  className="w-12 h-12 rounded-full ml-2"
                />
                <div className="absolute rounded-full w-svw h-16 flex items-center justify-start opacity-0 hover:opacity-100 transition-all duration-100 ease-in z-50 text-white">
                  <div className="w-full flex items-center justify-start ml-4">
                    <IconContext.Provider
                      value={{ size: "30px", color: "#fff" }}
                    >
                      <AiFillPlayCircle />
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="flex flex-col w-full items-start justify-start ml-4">
                  <p className="text-white font-bold line-clamp-1">
                    {track.track.name}
                  </p>
                  <p className="text-slate-400 font-semibold">
                    {track.track.artists[0].name}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center w-1/5 h-full">
                <p className="text-[#b6b6b6] text-xl flex items-center justify-end focus:text-[#fff]">
                  ...
                </p>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queue;
