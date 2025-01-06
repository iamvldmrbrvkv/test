import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => 'https://kaleidoscopic-fenglisu-1d45cd.netlify.app',
    }),
  }),
});

export const { useGetTestQuery } = apiSlice;