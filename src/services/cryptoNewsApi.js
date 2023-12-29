import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-RapidAPI-Key': '26e0f0db27mshee728addbeb6c29p10bb11jsn99c43fce18dd',
  'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
};

const createRequest = (url, { count }) => ({ url, headers: cryptoNewsHeaders, params: { limit: count } });

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1/';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest('/coindesk'), 
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
