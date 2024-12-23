import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
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
      form.reset();
      //   console.log("Response from server:", data);
    } catch (error) {
      console.error("Error posting blog data:", error);
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
    <div>
      <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
        {/* Blog Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-sm text-gray-500 mb-4">Category: {category}</p>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        {/* Blog Content */}
        <div className="mt-6 ">
          <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
          <p className="text-gray-600 mt-2">{sortDescription}</p>
        </div>
        {/* Blog Content */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Description
            </h2>
            <p className="text-gray-600 mt-2">{longDescripntion}</p>
          </div>
          <div>
            {user?.email === buyerInfo && (
              <Link to={`/update/${_id}`}>
                <button className="btn bg-green-500">Update Now</button>
              </Link>
            )}
          </div>
        </div>

        {/* Comment Section */}
        {user?.email !== buyerInfo ? (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Leave a Comment
            </h2>
            <form onSubmit={handleSubmitCommet} className="flex flex-col gap-4">
              <textarea
                name="comment"
                placeholder="Write your comment here..."
                className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 self-end"
              >
                Submit Comment
              </button>
            </form>
            <div className="mb-6">
              <h1>ALl Comment{comments.length}</h1>
              {comments.map((cmt, index) => (
                <div key={index} className="p-4 border-b border-gray-200">
                  <div>
                    <img
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full"
                      src={cmt?.photo}
                      alt=""
                    />
                  </div>
                  <p className="text-sm text-gray-600">{cmt.name}</p>
                  <p className="text-gray-800">{cmt.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-red-500">Owner can not commnet right now</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
