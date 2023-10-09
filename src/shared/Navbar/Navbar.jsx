import { Link, NavLink } from "react-router-dom";
import useAuthInfo from "./../../hooks/useAuthInfo";
import toast from "react-hot-toast";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  const { user, logOut } = useAuthInfo();

  const handleLogOut = () => {
    logOut().then(toast.success("logout successfully"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          className="text-2xl p-2 bg-sky-100 round-lg"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-2xl p-2 bg-sky-100 round-lg"
          to="/booking"
        >
          Book Event
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-2xl p-2 bg-sky-100 round-lg"
          to="/career"
        >
          Join Us
        </NavLink>
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
              <GrMenu />
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
          <ul className="menu space-x-4 menu-horizontal px-1">{navLinks}</ul>
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
