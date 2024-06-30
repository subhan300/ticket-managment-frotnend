// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3977/api' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    
    login: builder.mutation({
      query: (credentials) => {
        return({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      })},
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation, useLoginMutation } = apiSlice;
