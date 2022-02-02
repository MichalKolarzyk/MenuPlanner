import { NavLink } from "react-router-dom";

const HomeNavLink = (props) => {
  const to = props.to;
  const label = props.label;
  const isActiveStyle = "w-full font-bold border-r-2 border-black px-2 my-1";
  const isNotActiveStyle = "w-full border-r-2 border-black px-2 my-1";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? isActiveStyle : isNotActiveStyle
      }
    >
      <span className="block">{label}</span>
    </NavLink>
  );
};

export default HomeNavLink;
