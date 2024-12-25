import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";

const UpdateBlog = () => {
  const { id } = useParams();
  //   console.log(id);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [updateBlog, setUpdateBlog] = useState({});
  //   console.log("data", updateBlog);

  useEffect(() => {
    fetchAllBlogData();
  }, [id]);
  const fetchAllBlogData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/all-blogs/${id}`
    );
    setUpdateBlog(data);
  };
  //   console.log(updateBlog);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const imageUrl = formData.get("imageUrl");
    const category = formData.get("category");
    const sortDescription = formData.get("sortDescription");
    const longDescripntion = formData.get("longDescripntion");

    const updateBlog = {
      title,
      imageUrl,
      category,
      sortDescription,
      longDescripntion,
    };

    // post req pathano hocche client side theke severside a;

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update-blog/${id}`,
        updateBlog
      );
      form.reset();
      toast.success("Updated Successfully!!");
      navigate("/");
    } catch (err) {
      // console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
    //   <form
    //     onSubmit={handleUpdate}
    //     className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8"
    //   >
    //     <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
    //       Add a New Blog
    //     </h2>

    //     {/* User Email */}
    //     <div className="mb-4">
    //       <label
    //         htmlFor="title"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         User Mail
    //       </label>
    //       <input
    //         defaultValue={user?.email}
    //         readOnly
    //         name="email"
    //         type="email"
    //         id="title"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //         placeholder="Enter blog title"
    //       />
    //     </div>
    //     {/* Blog Title */}
    //     <div className="mb-4">
    //       <label
    //         htmlFor="title"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         Blog Title
    //       </label>
    //       <input
    //         defaultValue={updateBlog?.title}
    //         name="title"
    //         type="text"
    //         id="title"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //         placeholder="Enter blog title"
    //       />
    //     </div>

    //     {/* Image URL */}
    //     <div className="mb-4">
    //       <label
    //         htmlFor="imageUrl"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         Image URL
    //       </label>
    //       <input
    //         defaultValue={updateBlog.imageUrl}
    //         name="imageUrl"
    //         type="url"
    //         id="imageUrl"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //         placeholder="Enter image URL"
    //       />
    //     </div>

    //     {/* Category Dropdown */}
    //     <div className="mb-4">
    //       <label
    //         htmlFor="category"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         Category
    //       </label>
    //       <select
    //         defaultValue={updateBlog.category}
    //         name="category"
    //         id="category"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //       >
    //         {/* const categories = ["Technology", "Health", "Travel", "Lifestyle", "Education"]; */}
    //         <option value="Technology">Technology</option>
    //         <option value="Health">Health</option>
    //         <option value="Travel">Travel</option>
    //         <option value="Lifestyle">Lifestyle</option>
    //         <option value="Education">Education</option>
    //       </select>
    //     </div>

    //     {/* Short Description */}
    //     <div className="mb-4">
    //       <label
    //         htmlFor="shortDescription"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         Short Description
    //       </label>
    //       <textarea
    //         defaultValue={updateBlog.sortDescription}
    //         name="sortDescription"
    //         id="shortDescription"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //         placeholder="Write a short description"
    //         rows="2"
    //       ></textarea>
    //     </div>

    //     {/* Long Description */}
    //     <div className="mb-6">
    //       <label
    //         htmlFor="longDescription"
    //         className="block text-gray-600 font-medium mb-2"
    //       >
    //         Long Description
    //       </label>
    //       <textarea
    //         defaultValue={updateBlog.longDescripntion}
    //         name="longDescripntion"
    //         id="longDescription"
    //         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
    //         placeholder="Write a detailed blog description"
    //         rows="4"
    //       ></textarea>
    //     </div>

    //     {/* Submit Button */}
    //     <button
    //       type="submit"
    //       className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
    //     >
    //       Update Blog
    //     </button>
    //   </form>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 relative p-4 z-0 pt-24">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-full h-full"
        >
          <circle cx="100" cy="100" r="90" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleUpdate}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            ✨ Update Your Blog ✨
          </h2>
          <p className="text-gray-500 mt-2">
            Make your blog better with fresh content and visuals!
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "80%" }} // Example progress
          ></div>
        </div>

        {/* User Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-medium mb-2"
          >
            User Email
          </label>
          <input
            defaultValue={user?.email}
            readOnly
            name="email"
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Blog Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 font-medium mb-2"
          >
            Blog Title
          </label>
          <input
            defaultValue={updateBlog?.title}
            name="title"
            type="text"
            id="title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
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
            defaultValue={updateBlog.imageUrl}
            name="imageUrl"
            type="url"
            id="imageUrl"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-pink-300"
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
            defaultValue={updateBlog.category}
            name="category"
            id="category"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          >
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
            defaultValue={updateBlog.sortDescription}
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
            defaultValue={updateBlog.longDescripntion}
            name="longDescripntion"
            id="longDescription"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-purple-300"
            placeholder="Write a detailed blog description"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring focus:ring-purple-300"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
