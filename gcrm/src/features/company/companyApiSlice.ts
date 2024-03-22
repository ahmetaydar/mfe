import { gcrmSlice } from '../api/gcrmSlice';

export const companyApiSlice = gcrmSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query({
      query: () => '/api/customer/getAll',
      providesTags: (id) => [{ type: 'company', id }],
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
  overrideExisting: false,
});

export const {
  useGetCompaniesQuery,
  useGetCompanyQuery,
  useAddCompanyMutation,
} = companyApiSlice;
