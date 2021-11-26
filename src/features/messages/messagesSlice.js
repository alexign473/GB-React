import { createSlice, nanoid } from "@reduxjs/toolkit";

// 1. Добавить редьюсеры чатов и сообщений.
const initialState = {
    messages: {
        room1: [
            { text: "HEYYEYAAEYAAAEYAEYAA", autor: "HEMAN" },
            { text: "Hey", autor: "HEMAN" },
            { text: "What's goin on?", autor: "HEMAN" },
        ],
        room2: [
            { text: "hello room2", autor: "HEMAN" },
            { text: "hello room2", autor: "User" }
        ]
    }
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        messageAdded: {
            reducer: (state, action) => {
                console.log(action.payload)
                const { roomId, message } = action.payload
                //@TODO фикс пустого массива
                state.messages[roomId].push(message)
            },
            prepare: (text, roomId) => {
                const id = nanoid()
                return {
                    payload: {
                        message: { id, text, autor: 'HEMAN' },
                        roomId,
                    }
                }
            }
        }
    }
})

export const { messageAdded } = messagesSlice.actions
export default messagesSlice.reducer