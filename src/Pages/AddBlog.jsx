import axios from "axios";
import { format } from "date-fns";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaPenFancy, FaLightbulb, FaImage, FaEdit } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const email = user?.email;
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosSecure.get(`/check-user?email=${email}`);
      console.log(data);
    };
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const title = formData.get("title");
    const imageUrl = formData.get("imageUrl");
    const category = formData.get("category");
    const sortDescription = formData.get("shortDescription");
    const longDescripntion = formData.get("longDescription");

    const blogData = {
      title,
      imageUrl,
      category,
      sortDescription,
      longDescripntion,
      buyerInfo: user?.email,
      buyerName: user?.displayName,
      date: format(new Date(), "Pp"),
    };

    console.log(blogData);

    try {
      await axiosSecure.post(`/add-blog?email=${email}`, blogData);
      //   console.log("Response from server:", data);
      toast.success("Your Blog Add");
      form.reset();
      navigate("/all-blogs");
    } catch (error) {
      console.error("Error posting blog data:", error);
    }
  };

  return (
    <div className="flex justify-center gap-6 items-center min-h-screen pt-20  p-4">
      <div className=" flex flex-col gap-6 md:flex-row items-start w-full max-w-7xl bg-white shadow-lg rounded-lg">
        {/* Left Side Content */}
        <div className="w-full sm:h-[800px] p-10 bg-gradient-to-br from-purple-500 to-indigo-700 text-white  rounded-l-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <FaPenFancy className="mr-2 text-yellow-300" /> Why Post This Blog?
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            When you choose to write and share a blog post, you're offering more
            than just words on a screen—you're sharing your thoughts, insights,
            experiences, and perspectives with the world. The description
            section is your opportunity to explain why this particular topic is
            important to you and why it deserves attention. It’s not just a
            summary; it’s your chance to connect with your readers on a deeper
            level and to set the tone for the rest of your post. A well-crafted
            description provides the context your readers need to understand the
            core message behind your content. It helps them see the relevance of
            the topic, whether it’s something that’s currently trending, a
            personal story, or a piece of valuable information that can help
            them in their lives or work.
          </p>
          <ul className="text-sm space-y-6">
            <li className="flex items-start">
              <FiCheckCircle className="h-6 w-6 mr-3 text-yellow-300" />
              <div>
                <h3 className="font-medium">Craft Catchy Titles</h3>
                <p className="text-white">
                  A compelling title grabs your audience's attention instantly.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaImage className="h-6 w-6 mr-3 text-yellow-300" />
              <div>
                <h3 className="font-medium">Use Eye-Catching Images</h3>
                <p className="text-white">
                  Add visuals that complement your blog and make it memorable.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaLightbulb className="h-6 w-6 mr-3 text-yellow-300" />
              <div>
                <h3 className="font-medium">Share Insights</h3>
                <p className="text-gray-200">
                  Provide unique perspectives to keep your readers engaged.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FaEdit className="h-6 w-6 mr-3 text-yellow-300" />
              <div>
                <h3 className="font-medium">Write Thoughtfully</h3>
                <p className="text-gray-200">
                  Ensure clarity and depth to deliver value to your audience.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full sm:h-[800px] p-10  md:w-2/3 bg-white  rounded-r-lg  bg-gradient-to-br from-purple-500 to-indigo-700"
        >
          <h2 className="text-xl sm:text-[26px] font-bold text-white mb-6 text-center">
            WRITE YOUR NEW BLOG HERE
          </h2>

          {/* Blog Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-white font-medium mb-2"
            >
              Blog Title<span className="text-red-500">**</span>
            </label>
            <input
              required
              name="title"
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter blog title"
            />
          </div>

          {/* Image URL */}
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-white font-medium mb-2"
            >
              Image URL<span className="text-red-500">**</span>
            </label>
            <input
              name="imageUrl"
              type="url"
              id="imageUrl"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter image URL"
            />
          </div>

          {/* Category Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-white font-medium mb-2"
            >
              Category<span className="text-red-500">**</span>
            </label>
            <select
              name="category"
              id="category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
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
              className="block text-white font-medium mb-2"
            >
              Short Description<span className="text-red-500">**</span>
            </label>
            <textarea
              required
              name="shortDescription"
              id="shortDescription"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Write a short description"
              rows="2"
            ></textarea>
          </div>

          {/* Long Description */}
          <div className="mb-6">
            <label
              htmlFor="longDescription"
              className="block text-white font-medium mb-2"
            >
              Long Description<span className="text-red-500">**</span>
            </label>
            <textarea
              name="longDescription"
              id="longDescription"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Write a detailed blog description"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
