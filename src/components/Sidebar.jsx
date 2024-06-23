import SidebarButton from "@/components/SidebarButton";
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaGripfire, FaSignOutAlt } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { useEffect, useState } from "react";
import { apiClient } from "../../spotify";

const Sidebar = () => {
  const [image, setImage] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
  );

  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="w-[100px] h-full flex flex-col items-center justify-between mt-4">
      <img
        src={image}
        alt="profile"
        className="w-[60px] h-[60px] rounded-full mt-4"
      />

      <div className="flex flex-col gap-y-4">
        <SidebarButton
          title={"Feed"}
          to={"/feed"}
          icon={<MdSpaceDashboard height="6px" width="6px" />}
        />
        <SidebarButton
          title={"Trending"}
          to={"/trending"}
          icon={<FaGripfire height="6px" width="6px" />}
        />
        <SidebarButton
          title={"Player"}
          to={"/player"}
          icon={<FaPlay height="6px" width="6px" />}
        />
        <SidebarButton
          title={"Favorites"}
          to={"/favorites"}
          icon={<MdFavorite height="6px" width="6px" />}
        />
        <SidebarButton
          title={"Library"}
          to={"/library"}
          icon={<IoLibrary height="6px" width="6px" />}
        />
      </div>
      <div className="mb-8">
        <SidebarButton
          title={"Sign out"}
          to={"/"}
          icon={<FaSignOutAlt height="6px" width="6px" />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
