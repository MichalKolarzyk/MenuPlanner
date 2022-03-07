import React from "react";

const BoldTextButton = (props : any) => {
    const className = `font-semibold text-white text-xl ${props.className}`
    const onClick = props.onClick;
    const disabled = props.disabled
  
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        className={className}
      >
        {props.children}
      </button>
    );
  };
  
  export default BoldTextButton;