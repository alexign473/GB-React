import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    error: null,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            // console.log(payload)
            state.currentUser = payload
            state.isAuthenticated = true
        },
        resetUser: (state) => {
            state.currentUser = null
            state.isAuthenticated = false
        },
    },
})

export const selectUser = (state) => state.auth.currentUser

export const { saveUser, resetUser } = usersSlice.actions
export default usersSlice.reducer