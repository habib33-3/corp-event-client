import { HiMail } from "react-icons/hi";
import { BsKeyFill } from "react-icons/bs";
import {
  AiOutlineUser,
  AiFillPicture,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useState } from "react";
import useAuthInfo from "./../../hooks/useAuthInfo";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";

const Registration = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const { createUser } = useAuthInfo();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      return toast.error(
        `The password must be 6 characters long and include at least one capital letter and one special character.`
      );
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Registration Successful");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="card shadow-xl p-5 w-2/5 mx-auto bg-sky-100">
        <h2 className="text-center text-4xl font-bold">Sign Up</h2>
        <div className="card bg-blue-100 p-3 w-[95%] mx-auto mt-8">
          <form
            className="space-y-3"
            action=""
            onSubmit={handleRegister}
          >
            <div className="form-control ">
              <label className=" flex text-2xl items-center gap-2">
                <HiMail />
                <span className="text-2xl font-semibold inline">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="name"
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
                name="picture"
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
                name="password"
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

          <p className="text-center mt-3">
            Already have an account, please
            <Link
              to="/login"
              className="text-blue-600 mx-1 font-bold"
            >
              login
            </Link>
          </p>
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Registration;
