import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Toaster/>
    </div>
  );
};

export default Root;
