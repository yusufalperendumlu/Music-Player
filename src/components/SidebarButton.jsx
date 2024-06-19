import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

const SidebarButton = (props) => {
  return (
    <Link to={props.to}>
      <div className="h-20 w-20 rounded-[20px] text-[#F8D9C0] flex items-center justify-center flex-col hover:bg-[#dedede40]">
        <IconContext.Provider value={{ size: "24px", className: "" }}>
          {props.icon}
          <p className="text-white font-bold ">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
