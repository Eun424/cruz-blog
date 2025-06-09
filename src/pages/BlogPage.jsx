import React, { useState } from "react";
import { useOutletContext } from "react-router";
import { FaHeart, FaTrash } from "react-icons/fa";

function BlogPage() {
  const { stories, toggleFavorite, deleteStory } = useOutletContext();

  const [selectedId, setSelectedId] = useState(null);
  const selectedStory = stories.find((s) => s.id === selectedId);

  return (
    <div className="flex gap-6">
      <div className="flex-1 max-w-md">
        <h2 className="text-2xl font-bold mb-6">Blog Stories</h2>

        {stories.length === 0 && (
          <p className="text-gray-500 italic">No stories found.</p>
        )}

        {stories.map((story) => (
          <div
            key={story.id}
            className="border p-4 mb-4 rounded shadow bg-white flex justify-between items-center cursor-pointer"
            onClick={() => setSelectedId(story.id)}
          >
            <div>
              <h3 className="text-lg font-semibold">{story.title}</h3>
              <p className="truncate max-w-xs" title={story.description}>
                {story.description}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent right panel toggle
                  toggleFavorite(story.id);
                }}
                title={story.favorite ? "Unfavorite" : "Favorite"}
                className={`p-2 rounded ${
                  story.favorite
                    ? "text-red-500"
                    : "text-gray-400 hover:text-red-500"
                }`}
              >
                <FaHeart size={20} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (
                    window.confirm(
                      `Are you sure you want to delete "${story.title}"?`
                    )
                  ) {
                    deleteStory(story.id);
                    if (selectedId === story.id) {
                      setSelectedId(null);
                    }
                  }
                }}
                title="Delete"
                className="p-2 rounded text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* This serves as the right panel */}

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
          <p className="text-gray-700 leading-6">{selectedStory.description}</p>
        </div>
      )}
    </div>
  );
}

export default BlogPage;
