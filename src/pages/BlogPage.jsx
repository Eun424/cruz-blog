import React from "react";
import { useOutletContext } from "react-router";
import { FaStar, FaTrash } from "react-icons/fa";

function BlogPage() {
  const { stories, toggleFavorite, deleteStory } = useOutletContext();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Blog Stories</h2>

      {stories.length === 0 && (
        <p className="text-gray-500 italic">No stories found.</p>
      )}

      {stories.map((story) => (
        <div
          key={story.id}
          className="border p-4 mb-4 rounded shadow bg-white flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-semibold">{story.title}</h3>
            <p>{story.description}</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleFavorite(story.id)}
              title={story.favorite ? "Unfavorite" : "Favorite"}
              className={`p-2 rounded ${
                story.favorite
                  ? "text-yellow-400"
                  : "text-gray-400 hover:text-yellow-400"
              }`}
            >
              <FaStar size={20} />
            </button>

            <button
              onClick={() => {
                if (
                  window.confirm(
                    `Are you sure you want to delete "${story.title}"?`
                  )
                ) {
                  deleteStory(story.id);
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
  );
}

export default BlogPage;
