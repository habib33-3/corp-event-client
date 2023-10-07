import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:w-11/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
