import { useEffect, useState } from "react";
import BlogPostCard from "../Components/BlogPostCard";
import axios from "axios";
import Banner from "../Components/Banner";
import { motion } from "framer-motion";
import { fadeIn } from "../varriants";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
            Explore the Latest on BlogVista! Dive into our newest blog post,
            where we share thought-provoking ideas, practical tips, and engaging
            stories designed to inspire and inform. Whether you're here to
            discover trends, deepen your knowledge, or spark creativity, this
            post brings you closer to the heart of what BlogVista stands for—a
            platform to connect, create, and share. Join the conversation and
            let your voice be heard!
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
