import { emptyApiSlice } from "../emptyApiSlice";

const userSlice = emptyApiSlice
  .enhanceEndpoints({ addTagTypes: ["User"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUserData: builder.query({
        query: () => `/users/me`,
      }),
    }),
  });

export const { useGetUserDataQuery } = userSlice;
