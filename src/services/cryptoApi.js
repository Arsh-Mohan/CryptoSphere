import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '26e0f0db27mshee728addbeb6c29p10bb11jsn99c43fce18dd',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl,
        transformResponse: (response) => {
            const parsedResponse = { ...response, data: { ...response.data, limit: response.data?.limit || 10 } };
            return parsedResponse;
          },
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
          query: (count) => createRequest(`/coins?limit=${count}`),
        }),
    
        getCryptoDetails: builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
    
        getCryptoHistory: builder.query({
          query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
    
        getExchanges: builder.query({
          query: () => createRequest('/exchanges'),
        }),
      }),
    });
    
    export const {
      useGetCryptosQuery,
      useGetCryptoDetailsQuery,
      useGetExchangesQuery,
      useGetCryptoHistoryQuery,
    } = cryptoApi;