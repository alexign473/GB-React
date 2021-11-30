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

export const { checkboxToggled } = profileSlice.actions
export default profileSlice.reducer

// const defaultState = {
//   checked: true,
// }

// const profileReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'CHECK':
//       return { ...state, checked: action.payload }
//     default:
//       return state
//   }
// }

// let store = createStore(profileReducer)