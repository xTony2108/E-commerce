import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyApiSlice = createApi({
  reducerPath: "emptyApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
