import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL || '/api' }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => '/data',
    }),
  }),
});

export const { useGetTestQuery } = apiSlice;