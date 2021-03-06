import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//! keys remove by
const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //   query: () => createRequest(`/coins`),
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});
console.log(cryptoApi);

export const { useGetCryptosQuery } = cryptoApi;
