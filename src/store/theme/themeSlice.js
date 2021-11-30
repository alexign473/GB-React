import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    darkMode: true,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        themeToggled(state) {
            state.darkMode = !state.darkMode
        }
    }
})

export const { themeToggled } = themeSlice.actions
export default themeSlice.reducer