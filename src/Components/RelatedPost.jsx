const RelatedPost = () => {
  const posts = [
    {
      title: "5 Tips to Boost Your Blogging Skills",
      category: "Technology",
      date: "December 20, 2024",
      image: "https://i.ibb.co.com/wwnk8Tf/blog-post.webp",
    },
    {
      title: "Why Content is the King of SEO",
      category: "Health",
      date: "December 18, 2024",
      image: "https://i.ibb.co.com/TgHMTk9/94868.jpg",
    },
    {
      title: "The Future of AI in Blogging Platforms",
      category: "Travel",
      date: "December 15, 2024",
      image: "https://i.ibb.co.com/59C2KFm/226.jpg",
    },
    {
      title: "How to Monetize Your Blog Effectively",
      category: "Education",
      date: "December 12, 2024",
      image: "https://i.ibb.co.com/f0k3wBX/13914817-5396346.jpg",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Related Posts
        </h2>

        {/* Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Post Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="p-4">
                <p className="text-sm text-gray-400">{post.category}</p>
                <h3 className="text-lg font-semibold text-white mt-2 mb-4">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;
