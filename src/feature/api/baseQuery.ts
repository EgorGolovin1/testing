import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export default fetchBaseQuery({
  baseUrl: "https://api.github.com/search/repositories",
});
