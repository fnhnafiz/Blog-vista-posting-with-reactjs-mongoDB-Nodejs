import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const WishList = () => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWatchlistBlogData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/wishlist/${user?.email}`
      );
      setWishlist(data);
    };
    fetchWatchlistBlogData();
  }, [user?.email]);

  // console.log(wishlist);
  const handleWishListDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/wishlist/${id}`
      );
      console.log("Delete response:", data);
      if (data.deletedCount > 0) {
        const remaining = wishlist.filter((item) => item._id !== id);
        setWishlist(remaining);
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
      <h1>I am WIshLish {wishlist.length}</h1>
      <section
        className={`px-2 md:px-5 container mx-auto w-full xl:w-10/12 flex justify-center items-center overflow-x-auto min-h-[350px] pt-[120px] py-10`}
      >
        <table className="w-full border-collapse border text-center border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-1 py-2">#</th>
              <th className="border border-gray-300 px-1 py-2">Blog Title</th>
              <th className="border border-gray-300 px-1 py-2">Category</th>
              <th className="border border-gray-300 px-1 py-2">Date & Time</th>
              <th className="border border-gray-300 px-1 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.length < 1 && (
              <tr>
                <td
                  colSpan="6"
                  className="py-4 text-xl md:text-2xl font-semibold text-slate-500"
                >
                  There is No wishlist found
                </td>
              </tr>
            )}
            {wishlist?.map((item, i) => (
              <tr key={item._id}>
                <td className="border border-gray-300 py-2">{i + 1}</td>
                <td className="border border-gray-300 py-2">{item.title}</td>
                <td className="border border-gray-300 py-2">{item.category}</td>
                <td className="border border-gray-300 py-2">{item.addDate}</td>
                <td className="border  border-gray-300 py-2">
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      to={`/updateReview/${item._id}`}
                      className="bg-green-500 inline-block text-white px-2 py-1 ml-2 rounded"
                    >
                      {/* <MdEditDocument /> */}
                    </Link>
                    <button
                      onClick={() => handleWishListDelete(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded btn"
                    >
                      Delete
                      {/* <MdDeleteForever /> */}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default WishList;
