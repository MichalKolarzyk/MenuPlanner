import { FiXCircle } from "react-icons/fi";

const CloseButton = (props) => {
  const onClick = props.onClick;

  return (
    <div>
      <FiXCircle
        className="text-gray-300"
        size="1.5rem"
        onClick={onClick}
      />
    </div>
  );
};

export default CloseButton;
