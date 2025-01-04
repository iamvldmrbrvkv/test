import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/data',
    }),
  }),
});

export const { useGetDataQuery } = apiSlice;