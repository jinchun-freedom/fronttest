// ** Toolkit imports
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers
import post from "./post";

export const store = configureStore({
  reducer: {
    post,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
