import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { companyApiSlice } from './features/company/companyApiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
