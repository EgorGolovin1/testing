import {
  createApi,
  defaultSerializeQueryArgs,
} from "@reduxjs/toolkit/query/react";
import baseQuery from "../baseQuery";

export const contentApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints(builder) {
    return {
      getRepositories: builder.query({
        query(language) {
          return `?q=language:${language}&sort=stars&order=desc}`;
        },
      }),
    };
  },
});

export const { useGetRepositoriesQuery } = contentApi;
