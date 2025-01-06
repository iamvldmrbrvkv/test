import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => '/https://gleaming-daifuku-653b76.netlify.app',
    }),
  }),
});

export const { useGetTestQuery } = apiSlice;