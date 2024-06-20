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
          "h-20 w-20 rounded-[20px] text-[#F8D9C0] flex items-center justify-center flex-col hover:bg-[#dedede40] transition-all duration-200 ease-linear",
          isActive ? "bg-[#dedede40] scale-[1.02]" : "bg-transparent"
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
