import toast from "react-hot-toast";
import useAuthInfo from "../hooks/useAuthInfo";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuthInfo();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login Successful");
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
