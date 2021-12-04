import { createSlice } from "@reduxjs/toolkit"
import { animeApi } from '../../api/animeAPI'

// 2. Добавить middleware для отправки запроса и обработки ответа, ошибки и состояния загрузки.
const initialState = {
    quote: {
        character: '',
        quote: '',
    },
    loading: false,
    error: null,
}

const animeAPISlice = createSlice({
    name: 'animeAPI',
    initialState,
    reducers: {
        setQuote: (state, action) => {
            const { character, quote } = action.payload
            state.quote.character = character
            state.quote.quote = quote
        },
        setLoading: (state) => {
            state.loading = true
        },
        setLoadingComplete: (state) => {
            state.loading = false
        },
    },
})

// Thunks
export const getQuote = () => async (dispatch) => {
    dispatch(setLoading())
    try {
        const { data } = await animeApi.get('random')
        // console.log(data)
        dispatch(setQuote(data))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setLoadingComplete())
    }
}

export const selectQuote = (state) => state.animeAPI.quote
export const selectLoading = (state) => state.animeAPI.loading

export const {
    setQuote,
    setLoading,
    setLoadingComplete,
} = animeAPISlice.actions
export default animeAPISlice.reducer