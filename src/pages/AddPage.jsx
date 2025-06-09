import React, { useState } from "react";
import axios from "axios";
import { useOutletContext, useNavigate } from "react-router";

function AddPage() {
  const { addStory } = useOutletContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");

  const API_URL = "http://localhost:3000/stories";

  const handleAdd = async () => {
    if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill in both title and description.");
      return;
    }

    const newStory = {
      title,
      description: desc,
      favorite: false,
    };

    try {
      const response = await axios.post(API_URL, newStory);
      addStory(response.data); // Update state immediately
      alert("Story added successfully!");
      setTitle("");
      setDescription("");
      navigate("/blog"); // This helps in redirecting us to blog immediately//
    } catch (error) {
      alert("Error adding story. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg border border-indigo-100">
      <h2 className="text-2xl font-bold text-indigo-700 mb-5 text-center">
        Add Travel Story
      </h2>

      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-indigo-500"
      />

      <textarea
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded mb-4 h-32 resize-none focus:outline-none focus:ring focus:border-indigo-500"
      />

      <button
        onClick={handleAdd}
        className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded transition"
      >
        Add Story
      </button>
    </div>
  );
}

export default AddPage;
