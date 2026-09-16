import { configureStore } from "@reduxjs/toolkit";

// import pages from "../application/services/api/v1/pages";

export const store = configureStore({
  reducer: {
    // pages: pages.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
