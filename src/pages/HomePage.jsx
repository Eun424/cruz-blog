import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function HomePage() {
  const stories = useSelector((state) => state.blog.stories);
  const favoritesIds = useSelector((state) => state.blog.favorites);
  const favorites = stories.filter((s) => favoritesIds.includes(s.id));

  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* All Stories */}
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">All Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => navigate(`/blog/${story.id}`)}
            className="border p-4 rounded shadow bg-white cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-lg font-bold text-indigo-700">{story.title}</h2>
            <p className="text-gray-600 truncate" title={story.description}>
              {story.description}
            </p>
          </div>
        ))}
      </div>

      {/* Favorite Stories */}
      <h2 className="text-xl font-bold text-indigo-800 mt-10 mb-4">
        Favorite Stories
      </h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500 italic">No favorite stories yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((story) => (
            <div
              key={story.id}
              onClick={() => navigate(`/blog/${story.id}`)}
              className="border p-4 rounded shadow bg-yellow-50 cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-lg font-bold text-indigo-700">{story.title}</h2>
              <p className="text-gray-700 truncate" title={story.description}>
                {story.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
