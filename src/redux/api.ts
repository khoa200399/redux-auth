import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-rest-api-nodejs.herokuapp.com/",

    prepareHeaders: (headers, api: any) => {
      const state = api.getState();
      const token = state.user.currentUser?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: `login`,
        method: "POST",
        body: credentials,
      }),
    }),

    getUsers: builder.query({
      query: () => `users`,
    }),
  }),
});

export const { useLoginMutation, useGetUsersQuery } = api;
