import React from "react";

const TextButton = (props : any) => {
  const className = `mt-2 text-white tracking-widest cursor-pointer ${props.className}`
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

export default TextButton;