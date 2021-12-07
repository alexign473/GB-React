import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    checked: true,
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        checkboxToggled(state, action) {
            state.checked = action.payload
        }
    }
})

export const selectProfile = state => state.profile.checked

export const { checkboxToggled } = profileSlice.actions
export default profileSlice.reducer