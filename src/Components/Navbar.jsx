import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  const [menuBar, setMenuBar] = useState(false);
  const [color, setColur] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColur(true);
    } else {
      setColur(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div
      className={
        color
          ? `header header-bg flex justify-between px-8 items-center py-6  text-white ${
              pathname === "/" && "text-white"
            }`
          : `header  flex justify-between px-8 items-center py-6 text-white`
      }
    >
      {/* Left section in navbar */}
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-4">
          {/* Menu bar */}
          <IoMenu
            onClick={() => setMenuBar(true)}
            className="text-4xl cursor-pointer lg:hidden"
          />
          {/* website name */}
          <Link to="/">
            <h1
              className={`text-2xl font-bold ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              BLOG VISTA
            </h1>
          </Link>
        </section>
        {/* Links in the center */}
        <ul className="hidden lg:block lg:flex space-x-6 ">
          <li>
            <NavLink
              to="/"
              className={`hover:text-red-500 font-semibold ml-6 ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-blog"
              className={`hover:text-red-500 font-semibold ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-blogs"
              className={`hover:text-red-500 font-semibold ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              All Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/featured-blogs"
              className={`hover:text-red-500 font-semibold ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              Featured Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={`hover:text-red-500 font-semibold ${
                pathname !== "/" && "text-black"
              } ${color && "text-white"}`}
            >
              Wishlist
            </NavLink>
          </li>
        </ul>
      </div>
      {/* sidebar menu open */}
      <div
        className={clsx(
          "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all z-50",
          menuBar && "translate-x-0"
        )}
      >
        <section className="text-black bg-white flex flex-col absolute left-0 top-0 h-screen p-8 gap-8  w-56">
          <IoClose
            onClick={() => setMenuBar(false)}
            className="text-4xl cursor-pointer mt-0 mb-8"
          />
          {/* Links in the center */}
          <ul className="flex flex-col gap-8 space-x-6">
            <li>
              <NavLink to="/" className="hover:text-red-500 font-semibold ml-6">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-blog"
                className="hover:text-red-500 font-semibold"
              >
                Add Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-blogs"
                className="hover:text-red-500 font-semibold"
              >
                All Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/featured-blogs"
                className="hover:text-red-500 font-semibold"
              >
                Featured Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className="hover:text-red-500 font-semibold"
              >
                Wishlist
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col gap-6">
            {user?.email ? (
              <>
                <div>
                  <img
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <button
                  onClick={handleLogOut}
                  className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </section>
      </div>
      {/* right side for user and button */}
      <section className="flex items-center gap-4">
        {/* User photo */}

        {/* Sign Out Button */}
        <div className="flex items-center gap-2">
          {user?.email ? (
            <>
              <div>
                <img
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
