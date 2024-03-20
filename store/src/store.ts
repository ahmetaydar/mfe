import { configureStore, createSlice } from '@reduxjs/toolkit';
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

interface AuthState {
  token: string | null;
  user: string | null;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { accessToken: null, refreshToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken, refreshToken } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAccessToken = (state: any) => state.auth.accessToken;
export const selectCurrentRefreshToken = (state: any) =>
  state.auth.refreshToken;

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://10.0.0.96:83',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as { auth: AuthState };
    const token = state.auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  any,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('sending refresh token');
    // send refresh token to get new access token
    const refreshResult = await baseQuery(
      '/api/auth/refreshtokenlogin',
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      // Type assertion for api.getState() to specify the type
      const state = api.getState() as { auth: { user: string } };
      const user = state.auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult, user }));
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
