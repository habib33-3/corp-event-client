import PropTypes from "prop-types";
import useAuthInfo from "./../../hooks/useAuthInfo";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuthInfo();

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
