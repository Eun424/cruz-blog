import React, { useState } from "react";
import { useOutletContext } from "react-router";

function HomePage() {
  const { stories } = useOutletContext();
  const [selectedId, setSelectedId] = useState(null);

  const selectedStory = stories.find((s) => s.id === selectedId);
  const favorites = stories.filter((s) => s.favorite);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex gap-6">
        <div className="flex-1 max-w-md">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">
            All Stories
          </h2>
          <div className="space-y-4">
            {stories.map((story) => (
              <div
                key={story.id}
                className="border p-4 rounded shadow bg-white cursor-pointer"
                onClick={() => setSelectedId(story.id)}
              >
                <h2 className="text-lg font-bold text-indigo-700">
                  {story.title}
                </h2>
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
                className="border p-4 rounded shadow bg-yellow-50 cursor-pointer"
                onClick={() => setSelectedId(story.id)}
              >
                <h2 className="text-lg font-bold text-indigo-700">
                  {story.title}
                </h2>
                <p className="text-gray-700 truncate" title={story.description}>
                  {story.description}
                </p>
              </div>
            ))
          )}
        </div>

        {selectedStory && (
          <div className="flex-1 p-4 border rounded bg-gray-50 shadow min-w-[300px] relative">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-xl"
              title="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
              {selectedStory.title}
            </h3>
            <p className="text-gray-700 leading-6">
              {selectedStory.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
