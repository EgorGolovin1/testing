import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../baseQuery";

export const contentApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints(builder) {
    return {
      getRepositories: builder.query({
        query(params) {
          const data = JSON.parse(params);
          return `?q=language:${data.language}&sort=stars&order=desc}`;
        },
      }),
    };
  },
});

export const { useGetRepositoriesQuery } = contentApi;
