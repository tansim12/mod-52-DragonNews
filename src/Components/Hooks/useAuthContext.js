import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const useAuthContext = () => {
  const all = useContext(AuthContext);
  return all;
};

export { useAuthContext };
