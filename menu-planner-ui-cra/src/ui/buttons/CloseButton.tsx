import React from "react";
import { FiXCircle } from "react-icons/fi";

const CloseButton = (props : any) => {
  const onClick = props.onClick;

  return (
    <div>
      <FiXCircle
        className="text-gray-300 cursor-pointer"
        size="1.5rem"
        onClick={onClick}
      />
    </div>
  );
};

export default CloseButton;
