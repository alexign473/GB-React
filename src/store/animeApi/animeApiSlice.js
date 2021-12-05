import { createSlice } from "@reduxjs/toolkit"
import { animeApi } from '../../api/animeAPI'

// 2. Добавить middleware для отправки запроса и обработки ответа, ошибки и состояния загрузки.
const initialState = {
    quotes: [
        // {
        //     anime: '',
        //     character: '',
        //     quote: '',
        // },
    ],
    loading: false,
    error: null,
}

const animeAPISlice = createSlice({
    name: 'animeAPI',
    initialState,
    reducers: {
        setQuote: (state, { payload }) => {
            state.quotes = [payload]
        },
        setLoading: (state) => {
            state.loading = true
        },
        setLoadingComplete: (state) => {
            state.loading = false
        },
        setManyQuotes: (state, { payload }) => {
            state.quotes = payload
        },
    },
})

// Thunks
// Get 1 random quote
export const getQuote = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await animeApi.get('random')
        console.log(data)
        dispatch(setQuote(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoadingComplete())
    }
}

// Get 10 random quotes
export const getManyQuotes = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await animeApi.get('quotes')
        dispatch(setManyQuotes(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoadingComplete())
    }
}

// Get 10 quotes by title
export const getQuotesByTitle = (title) => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await animeApi.get(`quotes/anime?title=${title}`)
        console.log(data)
        dispatch(setManyQuotes(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoadingComplete())
    }
}

export const selectQuotes = (state) => state.animeAPI.quotes
export const selectLoading = (state) => state.animeAPI.loading

export const {
    setQuote,
    setLoading,
    setLoadingComplete,
    setManyQuotes,
} = animeAPISlice.actions
export default animeAPISlice.reducer