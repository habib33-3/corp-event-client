
import { BiSolidError } from "react-icons/bi";
import {Link} from "react-router-dom"

const ErrorPage = () => {
  

  return (
    <div className="text-center flex flex-col gap-4 h-screen pt-8 justify-center space items-center">
      <BiSolidError className="text-5xl" />
      <h1 className="text-7xl">Oops</h1>
      <p className="text-2xl">Something Wrong</p>
      <p className="text-3xl font-bold">Page Not found</p>
      <Link className="btn btn-accent" to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;
