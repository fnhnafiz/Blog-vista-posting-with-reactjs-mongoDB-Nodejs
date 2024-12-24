import axios from "axios";
import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const imageUrl = formData.get("imageUrl");
    const category = formData.get("category");
    const sortDescription = formData.get("sortDescription");
    const longDescripntion = formData.get("longDescripntion");

    const blogData = {
      title,
      imageUrl,
      category,
      sortDescription,
      longDescripntion,
      buyerInfo: user?.email,
      date: format(new Date(), "Pp"),
    };

    console.log(blogData);
    // const apiUrl = `${import.meta.env.VITE_API_URL}/add-blog`;
    // console.log(apiUrl);
    // // make a post with axios and send data in server
    // const { data } = await axios.post(
    //   `${import.meta.env.VITE_API_URL}/add-blog`,
    //   blogData
    // );
    // console.log(data);
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/add-blog`, blogData);
      //   console.log("Response from server:", data);
      toast.success("Your Blog Add");
      form.reset();
      navigate("/all-blogs");
    } catch (error) {
      console.error("Error posting blog data:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Add a New Blog
        </h2>

        {/* Blog Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 font-medium mb-2"
          >
            Blog Title
          </label>
          <input
            name="title"
            type="text"
            id="title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter blog title"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-600 font-medium mb-2"
          >
            Image URL
          </label>
          <input
            name="imageUrl"
            type="url"
            id="imageUrl"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter image URL"
          />
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-600 font-medium mb-2"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
            {/* const categories = ["Technology", "Health", "Travel", "Lifestyle", "Education"]; */}
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Travel">Travel</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Education">Education</option>
          </select>
        </div>

        {/* Short Description */}
        <div className="mb-4">
          <label
            htmlFor="shortDescription"
            className="block text-gray-600 font-medium mb-2"
          >
            Short Description
          </label>
          <textarea
            name="sortDescription"
            id="shortDescription"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write a short description"
            rows="2"
          ></textarea>
        </div>

        {/* Long Description */}
        <div className="mb-6">
          <label
            htmlFor="longDescription"
            className="block text-gray-600 font-medium mb-2"
          >
            Long Description
          </label>
          <textarea
            name="longDescripntion"
            id="longDescription"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write a detailed blog description"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
