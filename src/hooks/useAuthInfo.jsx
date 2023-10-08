import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuthInfo = () => {
  const data = useContext(AuthContext);

  return data;
};

export default useAuthInfo;
