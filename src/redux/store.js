import galleryReducer from "./galleryState";
import taskReducer from "./tasksSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    tasks: taskReducer,
  },
});
