import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Website Name on Left */}
        <div className="text-2xl font-bold">My Website</div>

        {/* Links in the center */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink to="/" className="hover:text-gray-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-blog" className="hover:text-gray-400">
              Add Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-blogs" className="hover:text-gray-400">
              All Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/featured-blogs" className="hover:text-gray-400">
              Featured Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist" className="hover:text-gray-400">
              Wishlist
            </NavLink>
          </li>
        </ul>

        {/* Login and Register buttons */}
        <div className="flex items-center space-x-4">
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
              <button onClick={handleLogOut} className="btn">
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-gray-400 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      <ul className="md:hidden bg-gray-700 py-2">
        <li>
          <NavLink to="/" className="block px-4 py-2 hover:bg-gray-600">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-blog" className="block px-4 py-2 hover:bg-gray-600">
            Add Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/all-blogs"
            className="block px-4 py-2 hover:bg-gray-600"
          >
            All Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/featured-blogs"
            className="block px-4 py-2 hover:bg-gray-600"
          >
            Featured Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to="/wishlist" className="block px-4 py-2 hover:bg-gray-600">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
