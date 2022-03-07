import React from "react";
import { NavLink } from "react-router-dom";

const HomeNavLink = (props : any) => {
  const to = props.to;
  const label = props.label;
  const isActiveStyle = "px-2 p-2 tracking-wider border-2 border-red-400 rounded-xl font-semibold";
  const isNotActiveStyle = "px-2 p-2 tracking-wider";

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
