import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router"; // still using react-router
import { toggleFavorite, deleteStory } from "../redux/blogSlice";
import { FaHeart, FaTrash } from "react-icons/fa";

function BlogPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const stories = useSelector((state) => state.blog.stories);
  const favorites = useSelector((state) => state.blog.favorites);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">Blog Stories</h2>

      {stories.length === 0 && (
        <p className="text-gray-500 italic">No stories found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => {
          const isFavorite = favorites.includes(story.id);
          return (
            <div
              key={story.id}
              onClick={() => navigate(`/blog/${story.id}`)}
              className="border p-4 rounded shadow bg-white flex flex-col justify-between cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-700">
                  {story.title}
                </h3>
                <p className="text-gray-600 truncate mt-2" title={story.description}>
                  {story.description}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigating
                    dispatch(toggleFavorite(story.id));
                  }}
                  title={isFavorite ? "Unfavorite" : "Favorite"}
                  className={`p-2 rounded ${
                    isFavorite ? "text-red-500" : "text-gray-400 hover:text-red-500"
                  }`}
                >
                  <FaHeart size={20} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm(`Delete "${story.title}"?`)) {
                      dispatch(deleteStory(story.id));
                    }
                  }}
                  title="Delete"
                  className="p-2 rounded text-red-500 hover:text-red-700"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
