import { IconContext } from "react-icons";

import WidgetEntry from "@/components/widgets/WidgetEntry";
import { FaChevronRight } from "react-icons/fa";

const WidgetCard = ({ title, similar, featured, newRelease }) => {
  console.log(similar);

  return (
    <div className="relative w-1/4 h-3/4  bg-custom-linear-one py-2 px-4 transition-all duration-200 ease-in-out cursor-pointer hover:scale-105 hover:opacity-100">
      <p className="text-lg font-extrabold text-[#c4d0e3]">{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist?.id}
              title={artist?.name}
              subtitle={artist?.followers?.total + "followers"}
              image={artist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
              key={album?.id}
              title={album?.name}
              subtitle={album?.release_date}
              image={album?.images[0]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              key={playlist?.id}
              title={playlist?.name}
              subtitle={playlist?.description}
              image={playlist?.images[0]?.url}
            />
          ))
        : null}
      <div className="absolute right-0 bottom-0 w-10/12 h-2/6 rounded-3xl bg-custom-linear-g opacity-100 transition-all duration-500 ease-in-out animate-none flex items-end justify-end p-4">
        <div>
          <IconContext.Provider value={{ color: "#c9d0e3", size: "2em" }}>
            <div>
              <FaChevronRight />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default WidgetCard;
