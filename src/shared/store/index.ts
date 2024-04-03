import { configureStore } from '@reduxjs/toolkit';
import {postsApi} from "../api/postsApi";


export const store = configureStore({
  reducer: {
    // Add other reducers here if needed
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
})

// export const store = configureStore(slices);
//
//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
