import { useEffect, useState } from "react";
import BlogPostCard from "../Components/BlogPostCard";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const axiosSecure = useAxiosSecure();
  // console.log(search);
  // console.log(category);

  useEffect(() => {
    // Fetch blogs based on search and category
    const fetchAllBlogData = async () => {
      try {
        const { data } = await axiosSecure.get(
          `/all-blogs?search=${search}&category=${category}`
        );
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchAllBlogData();
  }, [search, category]);

  // console.log(blogs);

  return (
    <div>
      <div className="flex justify-around items-center mt-12">
        <div>
          <h1 className="text-3xl font-extrabold text-center ">
            See All BLOG POST
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <h4>Choose Your Category:</h4>
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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

          <div>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter Job Title"
                aria-label="Enter Job Title"
              />

              <button
                type="button"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 my-6">
        {blogs.map((blog) => (
          <BlogPostCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
