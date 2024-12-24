import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  // console.log(id);
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchAllBlogData = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-blogs/${id}`
      );
      setBlog(data);
    };
    fetchAllBlogData();
  }, [id]);

  const handleSubmitCommet = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const comment = formData.get("comment");
    // console.log(comment);
    const commentData = {
      blogId: _id, // Replace with the actual blog ID
      buyerInfo: user?.email, // Replace with logged-in user's email
      photo: user?.photoURL,
      name: user?.displayName,
      comment,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/add-comment`,
        commentData
      );

      // if (response.data.insertedId) {
      //   setComments((previousComments) => [commentData, ...previousComments]);
      // }
      fetchComments();
      toast.success("Comment Successfully");
      form.reset();
      //   console.log("Response from server:", data);
    } catch (error) {
      console.error("Error posting blog data:", error);
      toast.error(error.response.data.message);
    }
  };

  // Fetch comments when the component loads
  const fetchComments = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/blog-comments/${id}`
      );
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error.message);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [id]);
  // console.log(comments);

  // console.log(blog);
  const {
    title,
    imageUrl,
    category,
    sortDescription,
    longDescripntion,
    _id,
    buyerInfo,
  } = blog;

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="container mx-auto md:w-[70%] p-6 my-10 bg-white rounded-lg shadow-lg">
        {/* Blog Header */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 mt-2">
            Short Description: {sortDescription}
          </p>

          <img
            src={imageUrl}
            alt={title}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-6 flex justify-between ">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Main Description:
            </h2>
            <p className="text-gray-600 mt-2">{longDescripntion}</p>
          </div>
          <p className="text-sm text-gray-500 mb-4 ">
            <span className="text-xl font-bold">Category:</span> {category}
          </p>
        </div>
        <div className="py-5">
          {user?.email === buyerInfo && (
            <Link to={`/update/${_id}`}>
              <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
                Update Now
              </button>
            </Link>
          )}
        </div>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Write a Comment
          </h2>
          <form onSubmit={handleSubmitCommet} className="flex flex-col gap-4">
            <textarea
              name="comment"
              placeholder="Write your comment here..."
              className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
            <button
              // disabled={user?.email === buyerInfo}
              type="submit"
              className="bg-blue-500  text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 self-end"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>
      {/* Comments  */}
      <div className="mb-6 px-8 md:px-2 md:w-[30%]">
        <h1 className="text-3xl font-bold py-12">Top Latest Comment</h1>
        {comments.map((cmt, index) => (
          <div
            key={index}
            className="p-4 mb-8 border-b flex gap-2 items-center border-gray-200"
          >
            <div>
              <img
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full"
                src={cmt?.photo}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-lg text-gray-600 font-semibold">
                {cmt.name}
              </h2>
              <p className="text-gray-800 text-sm">{cmt.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
