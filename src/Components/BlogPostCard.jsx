import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../varriants";

// import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import { axiosSecure } from "../Hooks/useAxiosSecure";
// import { format } from "date-fns";

const BlogPostCard = ({ blog }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { title, imageUrl, sortDescription, _id, date } = blog;
  // const [watchList, setWatchlist] = useState([]);

  const handleWishlist = async () => {
    if (!user?.email) {
      toast.error("Please log in to add to your wishlist!");
      return;
    }

    const wishlistData = {
      id: _id,
      email: user?.email,
    };

    try {
      const response = await axiosSecure.post(`/waishlist`, wishlistData);
      // console.log(response.data, "Response");
      if (response.data.message === "Already exist") {
        toast.error("This blog is already in your wishlist!");
      } else {
        toast.success("Added to wishlist successfully!");
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error.message);
      toast.error("Failed to add to wishlist. Please try again.");
    }
  };

  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className="container mx-auto bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row  gap-8 space-x-6 p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="w-full sm:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-72 object-cover rounded-md"
        />
      </div>

      {/* Blog Content */}
      <div className="w-full sm:w-1/2 space-y-4 flex flex-col justify-between ">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm leading-6">{sortDescription}</p>
        <p className="text-gray-400 text-sm italic">{date}</p>
        <div className="flex justify-end  space-x-4">
          <Link to={`/blog/${_id}`}>
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition  duration-200">
              Read Blog
            </button>
          </Link>
          <button
            onClick={handleWishlist}
            className="px-6 py-3 bg-gradient-to-r from-yello-600 to-yellow-500 text-black hover:text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200"
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
