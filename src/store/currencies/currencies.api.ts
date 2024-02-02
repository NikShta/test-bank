import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const currenciesApi = createApi({
  reducerPath: "currencies/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinbase.com/",
  }),
  endpoints: build => ({
    getCurrencies: build.query<any, string>({
      query: () => `v2/currencies`,
    }),
  }),
});

export const {useGetCurrenciesQuery} = currenciesApi;
