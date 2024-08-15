import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = localStorage.getItem('token') || '';
    //   // console.log(token);
    
    //   if (token) {
    //     headers.set('Authorization', `${token}`);
    //   }
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: info => ({
        url: "/login",
        method: "POST",
        body: info,
      })
    }),
  }),
});

export const {
  useLoginUserMutation,
} = apiSlice;