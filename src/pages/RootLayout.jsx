import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import axios from "axios";
import { FaHome } from "react-icons/fa";

const API_URL = "http://localhost:3000/stories";

function RootLayout() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await axios.get(API_URL);
        setStories(res.data);
      } catch (err) {
        alert("Failed to fetch stories.");
      }
    }
    fetchStories();
  }, []);

  // Toggles favorite story//
  const toggleFavorite = async (id) => {
    const story = stories.find((s) => s.id === id);
    if (!story) return;

    const updatedStory = { ...story, favorite: !story.favorite };

    try {
      await axios.put(`${API_URL}/${id}`, updatedStory);
      setStories((prev) => prev.map((s) => (s.id === id ? updatedStory : s)));
    } catch (err) {
      alert("Failed to update favorite.");
    }
  };

  // Deletes a story//
  const deleteStory = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setStories((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      alert("Failed to delete story.");
    }
  };

  // Adds a new story to the state //
  const addStory = (newStory) => {
    setStories((prev) => [...prev, newStory]);
  };

  return (
    <>
      <nav className="bg-indigo-700 text-white p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <FaHome size={28} className="text-yellow-400" />
          <span className="font-bold text-xl">Travel Blog</span>
        </div>
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              } pb-1`
            }
          >
            Add New
          </NavLink>
        </div>
      </nav>

      <main className="p-6 max-w-6xl mx-auto">
        <Outlet context={{ stories, toggleFavorite, deleteStory, addStory }} />
      </main>
    </>
  );
}

export default RootLayout;
