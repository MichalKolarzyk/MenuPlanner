import useUser from "../../store/user/useUser";
import RequireTrue from "./RequireTrue";

const RequireAdmin = (props) => {
  const userHook = useUser();

  return (
    <RequireTrue value={userHook.user.roleName === "Admin"}>
      {props.children}
    </RequireTrue>
  );
};

export default RequireAdmin;
