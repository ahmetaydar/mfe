import { configureStore } from '@reduxjs/toolkit';
import { gcrmSlice } from './features/api/gcrmSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [gcrmSlice.reducerPath]: gcrmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gcrmSlice.middleware),
  devTools: true,
});
setupListeners(store.dispatch);
