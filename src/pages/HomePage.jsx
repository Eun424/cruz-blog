import React from "react";
import { useOutletContext } from "react-router";

function HomePage() {
  const { stories } = useOutletContext();
  const favorites = stories.filter((s) => s.favorite === true);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">All Stories</h2>
      <div className="space-y-4">
        {stories.map((story) => (
          <div key={story.id} className="border p-4 rounded shadow bg-white">
            <h2 className="text-lg font-bold text-indigo-700">{story.title}</h2>
            <p className="text-gray-600 truncate" title={story.description}>
              {story.description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-indigo-800 mt-10 mb-4">
        Favorite Stories
      </h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500 italic">No favorite stories yet.</p>
      ) : (
        favorites.map((story) => (
          <div
            key={story.id}
            className="border p-4 rounded shadow bg-yellow-50"
          >
            <h2 className="text-lg font-bold text-indigo-700">{story.title}</h2>
            <p className="text-gray-700 truncate" title={story.description}>
              {story.description}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default HomePage;
