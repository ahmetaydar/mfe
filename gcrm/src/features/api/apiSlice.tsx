import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import { logOut } from 'store/store';

const routeName = localStorage.getItem('companyName');
const authURL = 'http://10.0.0.55:84';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://10.0.0.55:88', // bu değişecek crm api urlsi gelecek
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = Cookies.get('accessToken');
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    if (routeName) {
      headers.set('Route-Name', 'gcode');
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    console.log('sending refresh token in g-crm');

    const refreshResult = await fetch(`${authURL}/api/auth/refreshtokenlogin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Route-Name': routeName || 'default',
      },
      body: JSON.stringify({ refreshToken: Cookies.get('refreshToken') }),
    });
    console.log('refreshResult', refreshResult);

    if (refreshResult.status === 200 || refreshResult.status === 201) {
      const { accessToken, refreshToken } = await refreshResult.json();
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['company'],
  endpoints: (builder) => ({}),
});
