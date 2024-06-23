import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import clsx from "clsx";

const SidebarButton = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  return (
    <Link to={props.to}>
      <div
        className={clsx(
          "h-20 w-20 rounded-[20px]  flex items-center justify-center flex-col hover:text-white transition-all duration-200 ease-linear",
          isActive
            ? "bg-[#dedede40] text-white scale-[1.02]"
            : "bg-transparent text-[#F8D9C0]"
        )}
      >
        <IconContext.Provider
          value={{
            size: "24px",
            className: "w-[30px] h-[30px] rounded-lg mt-[10px] mb-[10px]",
          }}
        >
          {props.icon}
          <p className="text-white font-bold ">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
