import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";

const WishList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [wishlist, setWishlist] = useState([]);
  console.log("I am user in wishlist", user);

  useEffect(() => {
    if (user?.email) {
      const fetchWatchlistBlogData = async () => {
        const { data } = await axiosSecure.get(`/wishlist/${user?.email}`);
        setWishlist(data);
      };
      fetchWatchlistBlogData();
    }
  }, [user?.email, axiosSecure]);

  // console.log(wishlist);
  const handleWishListDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/wishlist/${id}`);
      console.log("Delete response:", data);
      if (data.deletedCount > 0) {
        const remaining = wishlist.filter((item) => item._id !== id);
        setWishlist(remaining);
        toast.success("Remove from wishlist");
        console.log("Item deleted successfully. Remaining items:", remaining);
      } else {
        console.error("Failed to delete wishlist item.");
      }
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
    }
  };
  return (
    <div>
      <section className="px-2 md:px-5 container mx-auto w-full xl:w-10/12 flex flex-col justify-center items-center overflow-x-auto  pt-[120px] py-10">
        {/* Heading Section */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Wishlist
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            All the blog posts you've added to your wishlist are listed here.
            You can easily view details or remove them if needed.
          </p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="w-full table-auto border-collapse text-sm text-gray-700">
            {/* Table Header */}
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-6 text-left">SL NO</th>
                <th className="py-3 px-6 text-left">Blog Title</th>
                <th className="py-3 px-6 text-left">Category</th>
                <th className="py-3 px-6 text-left">Date & Time</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              {wishlist.length < 1 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="py-4 text-xl font-semibold text-center text-gray-500"
                  >
                    No items found in your wishlist.
                  </td>
                </tr>
              ) : (
                wishlist?.map((item, i) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-3 px-6">{i + 1}</td>
                    <td className="py-3 px-6 font-medium text-gray-800">
                      {item.title}
                    </td>
                    <td className="py-3 px-6 text-gray-600">{item.category}</td>
                    <td className="py-3 px-6 text-gray-500">{item.addDate}</td>
                    <td className="py-3 px-6">
                      <div className="flex gap-3 justify-center">
                        <Link to={`/blog/${item._id}`}>
                          <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-200">
                            View Details
                          </button>
                        </Link>
                        <button
                          onClick={() => handleWishListDelete(item._id)}
                          className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default WishList;
