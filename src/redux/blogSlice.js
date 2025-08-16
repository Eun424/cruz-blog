import { createSlice } from "@reduxjs/toolkit";

// Initializing the state
const initialState = {
  stories: [],
  favorites: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addStory: (state, action) => {
      state.stories.push(action.payload);
    },
    resetStories: (state, action) => { state.stories = action.payload; },

    toggleFavorite: (state, action) => {
      const storyId = action.payload;
      if (state.favorites.includes(storyId)) {
        state.favorites = state.favorites.filter((id) => id !== storyId);
      } else {
        state.favorites.push(storyId);
      }
    },
    deleteStory: (state, action) => {
      const id = action.payload;
      state.stories = state.stories.filter((story) => story.id !== id);
      state.favorites = state.favorites.filter((fid) => fid !== id);
    },
  },
});

export const { addStory, toggleFavorite, deleteStory, resetStories } = blogSlice.actions;
export default blogSlice.reducer;
