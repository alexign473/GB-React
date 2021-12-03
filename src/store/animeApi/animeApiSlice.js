import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
    reducerPath: 'animeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://animechan.vercel.app/api/'
    }),
    endpoints: (builder) => ({
        // getWaifuByCategory: builder.query({
        //     query: (category) => `sfw/${category}`,
        // }),
        getRandomQuote: builder.query({
            query: () => 'random',
        }),
        getManyRandomQuotes: builder.query({
            query: () => 'quotes'
        }),
        getQoutesByAnimeTitle: builder.query({
            query: (title) => `quotes/anime?title=${title}`
        })
    }),
})

export const { useGetRandomQuoteQuery, useGetManyRandomQuotesQuery } = animeApi