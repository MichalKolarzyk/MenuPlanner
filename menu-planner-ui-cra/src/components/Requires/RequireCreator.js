import useUser from "../../store/user/useUser";
import RequireTrue from "./RequireTrue";

const RequireCreator = (props) => {
  const userHook = useUser();

  return (
    <RequireTrue value={userHook.user.roleName === "Admin" || userHook.user.roleName === "Creator"}>
      {props.children}
    </RequireTrue>
  );
};

export default RequireCreator;
