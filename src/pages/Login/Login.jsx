import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/GoogleLogin";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useAuthInfo from "./../../hooks/useAuthInfo";
import toast from "react-hot-toast";
import { HiMail } from "react-icons/hi";
import { BsKeyFill } from "react-icons/bs";

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const { logIn } = useAuthInfo();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="card shadow-xl p-5 w-full lg:w-2/5 mx-auto bg-sky-100">
        <h2 className="text-center text-4xl font-bold">Sign In</h2>
        <div className="card bg-blue-100 p-3 w-[95%] mx-auto mt-8">
          <form
            className="space-y-3"
            action=""
            onSubmit={handleLogin}
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
              Login
            </button>
          </form>

          <p className="text-center mt-3">
            Don{"'"}t have an account? please
            <Link
              to="/register"
              className="text-blue-600 mx-1 font-bold"
            >
              register
            </Link>
          </p>
        </div>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
