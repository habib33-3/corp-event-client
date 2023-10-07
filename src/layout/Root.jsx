import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="lg:w-11/12 mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
