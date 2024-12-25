import { useEffect, useState } from "react";
import BlogPostCard from "../Components/BlogPostCard";
import axios from "axios";
import Banner from "../Components/Banner";
import { motion } from "framer-motion";
import { fadeIn } from "../varriants";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Fetch blogs based on search and category
    const fetchAllBlogData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs-limit`
        );
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchAllBlogData();
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="pt-6 space-y-3 px-6 md:px-24 py-6 md:py-12 my-8"
        >
          <h1 className="font-extrabold text-5xl text-center">
            Recent Blogs Post
          </h1>
          <p className="text-gray-400 font-semibold text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            labore atque aut laborum quia praesentium repudiandae deserunt ipsam
            pariatur officiis. Alias fugiat nemo deserunt nostrum ullam dolorem
            minima? Nobis repellendus officiis veritatis sequi esse nemo ullam,
            reiciendis quas recusandae aliquam optio architecto dignissimos
            error molestiae voluptatum dolor accusamus? Voluptates, dolor!
          </p>
        </motion.div>
        <div>
          {blogs.map((blog) => (
            <BlogPostCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
