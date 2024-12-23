import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
// import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import { format } from "date-fns";

const BlogPostCard = ({ blog }) => {
  const { user } = useAuth();
  const { title, imageUrl, category, sortDescription, _id, date } = blog;
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
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/waishlist`,
        wishlistData
      );
      console.log(response.data, "Response");
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
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      {/* Blog Image */}
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs uppercase py-1 px-3 rounded">
          {category}
        </span>
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{sortDescription}</p>
        <p>{date}</p>

        {/* Buttons */}
        <div className="flex justify-between items-center">
          <Link to={`/blog/${_id}`}>
            <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition duration-200">
              Details
            </button>
          </Link>
          <button
            onClick={handleWishlist}
            className="bg-gray-200 text-gray-700 text-sm py-2 px-4 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 transition duration-200"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
