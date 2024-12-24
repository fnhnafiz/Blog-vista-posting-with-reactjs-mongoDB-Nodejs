import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-xl font-bold text-white">Your Website Name</h2>
            <p className="mt-4 text-sm">
              Explore our blogs and stay updated with the latest insights, tips,
              and news in your field.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/home" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-yellow-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="mt-4 text-sm">
              Email:{" "}
              <span className="hover:text-yellow-400">
                info@yourwebsite.com
              </span>
            </p>
            <p className="mt-1 text-sm">
              Phone:{" "}
              <span className="hover:text-yellow-400">+123 456 7890</span>
            </p>
            <div className="mt-4 flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-yellow-400">
                <FaFacebookF size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-yellow-400">
                <FaTwitter size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-yellow-400">
                <FaInstagram size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-yellow-400">
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Website Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
