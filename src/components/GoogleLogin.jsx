import toast from "react-hot-toast";
import useAuthInfo from "../hooks/useAuthInfo";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuthInfo();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn w-full mt-5"
      >
        Continue with
        <FcGoogle />
      </button>
    </div>
  );
};

export default GoogleLogin;
