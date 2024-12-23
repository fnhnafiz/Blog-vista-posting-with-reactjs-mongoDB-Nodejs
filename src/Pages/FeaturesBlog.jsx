import axios from "axios";
import { useEffect, useState } from "react";
import BlogPostCard from "../Components/BlogPostCard";

const FeaturesBlog = () => {
  const [featureBlog, setFeatureBlog] = useState([]);
  useEffect(() => {
    // Fetch blogs based on search and category
    const fetchAllBlogData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/features-blogs`
        );
        setFeatureBlog(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchAllBlogData();
  }, []);
  // console.log(featureBlog);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
      {featureBlog?.map((blog, index) => (
        <BlogPostCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default FeaturesBlog;
