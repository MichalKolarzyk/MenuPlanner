import React from "react";

const Header2Label = (props : any) => {
  return (
    <div className="p-5 text-black text-xl tracking-widest text-center">
      {props.children}
    </div>
  );
};

export default Header2Label;
