import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  endpoints: (builder) => ({
    getTest: builder.query({
      query: () => '/data',
    }),
  }),
});

export const { useGetTestQuery } = apiSlice;