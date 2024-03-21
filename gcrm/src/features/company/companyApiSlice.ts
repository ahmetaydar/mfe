import { apiSlice } from '../api/apiSlice';

export const companyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => '/api/customer/getAll',
      providesTags: ['company'],
    }),

    getCompany: builder.query({
      query: (id) => `/api/customer/get/${id}`,
      providesTags: ['company'],
    }),

    addCompany: builder.mutation({
      query: (newCompany) => ({
        url: '/api/customer/create',
        method: 'POST',
        body: newCompany,
      }),
      invalidatesTags: ['company'],
    }),
  }),
});

export const { useGetCompaniesQuery, useGetCompanyQuery } = companyApiSlice;
