import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    rooms: ["room1", "room2", "room3"],
}

const roomsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    }
})

export const { } = roomsSlice.actions
export default roomsSlice.reducer