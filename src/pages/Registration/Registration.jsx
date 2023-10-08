import { HiMail } from "react-icons/hi";
import { BsKeyFill } from "react-icons/bs";
import {
  AiOutlineUser,
  AiFillPicture,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";

const Registration = () => {
  const [passwordShow, setPasswordShow] = useState(false);

  return (
    <div>
      <div className="card shadow-xl p-5 w-2/5 mx-auto bg-sky-100">
        <h2 className="text-center text-4xl font-bold">Sign Up</h2>
        <div className="card bg-blue-100 p-3 w-[95%] mx-auto mt-8">
          <form
            className="space-y-3"
            action=""
          >
            <div className="form-control ">
              <label className=" flex text-2xl items-center gap-2">
                <HiMail />
                <span className="text-2xl font-semibold inline">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className=" flex text-2xl items-center gap-2">
                <AiOutlineUser />
                <span className="text-2xl font-semibold inline">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className=" flex text-2xl items-center gap-2">
                <AiFillPicture />
                <span className="text-2xl font-semibold inline">Picture</span>
              </label>
              <input
                type="text"
                placeholder="Picture URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className=" flex text-2xl items-center gap-2">
                <BsKeyFill />
                <span className="text-2xl font-semibold inline">Password</span>
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <div
                onClick={() => setPasswordShow(!passwordShow)}
                className="text-2xl absolute right-1 bottom-3"
              >
                {passwordShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success btn-lg w-full mt-2"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
