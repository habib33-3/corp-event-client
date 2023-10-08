import { Link, NavLink } from "react-router-dom";
import useAuthInfo from "./../../hooks/useAuthInfo";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuthInfo();

  const handleLogOut = () => {
    logOut().then(toast.success("logout successfully"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">CorpEvent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:block">
            {user ? (
              <div className="flex items-center gap-1">
                <p className="text-lg font-semibold text-center">
                  {user.displayName}
                </p>
                <img
                  src={user.photoURL}
                  alt="user img"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogOut}
                  className="btn btn-warning"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                className="btn btn-warning"
                to="/login"
              >
                login
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            {user ? (
              <details className="dropdown mr-8">
                <summary className="m-1 btn">
                  <img
                    src={user.photoURL}
                    alt="user img"
                    className="w-10 h-10 rounded-full"
                  />
                </summary>
                <ul className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-max ">
                  <li>
                    <p className="text-lg font-semibold text-center">
                      {user.displayName}
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm w-max btn-warning"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </details>
            ) : (
              <Link
                className="btn btn-warning"
                to="/login"
              >
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
