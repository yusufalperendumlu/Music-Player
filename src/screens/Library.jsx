import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { apiClient } from "../../spotify";
import { images } from "@/constants";

const Library = () => {
  const navigate = useNavigate();
  const [playLists, setPlayLists] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayList = async () => {
      try {
        const response = await apiClient.get("me/playlists");
        setPlayLists(response.data.items);
      } catch (error) {
        setError(error);
      }
    };

    fetchPlayList();
  }, []);

  const playPlaylist = (id) => {
    navigate("/player", {
      state: { id: id },
    });
  };

  return (
    <div className="w-[calc(100%-100px)] h-screen overflow-x-hidden bg-[#1e2a3e] rounded-3xl bg-custom-gradient">
      <div className="p-8 gap-4 flex flex-wrap justify-between overflow-y-auto">
        {playLists?.map((value) => (
          <div
            className="relative w-1/6 h-1/3 rounded-2xl bg-[rgb(30,42,62)] border border-[rgba(54,69,98,0.18)] p-4 mb-3 transition-all duration-200 ease-linear cursor-pointer hover:scale-[1.02]"
            key={value.id}
            onClick={() => playPlaylist(value.id)}
          >
            <img
              src={value.images[0].url}
              alt="playlist"
              className="w-full aspect-square rounded-2xl"
            />
            <p className="font-normal text-base text-white my-3 overflow-hidden line-clamp-2">
              {value.name}
            </p>
            <p className="font-light text-xs m-0 text-[#aaa]">
              {value.tracks.total} tracks
            </p>
            <div className="absolute inset-0 w-full h-full flex items-center justify-end opacity-0 hover:opacity-100 transition-all duration-200 ease-in hover:-mt-2">
              <div className="w-full absolute bottom-[80px] flex items-center justify-end mr-5">
                <IconContext.Provider
                  value={{ size: "60px", color: "#E99D78" }}
                >
                  <AiFillPlayCircle />
                </IconContext.Provider>
              </div>
            </div>
          </div>
        ))}
        {error && (
          <div className="flex flex-col items-center justify-center h-screen w-screen">
            <img src={images.WaitInLine} alt="error" className="w-80 h-80" />
            <p className="text-white text-2xl">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
