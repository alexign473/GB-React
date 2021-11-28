import { createSlice, createSelector, nanoid, current } from "@reduxjs/toolkit";
import initialChatData from "./initialStateData.json";

// 1. Добавить редьюсеры чатов и сообщений.
const initialState = {
    chats: initialChatData.chats,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        messageAdded: {
            reducer: (state, action) => {
                // console.log(action.payload)                
                const { message, chatId } = action.payload
                const chat = state.chats.find((c) => c.id === chatId)
                if (chat != null) {
                    chat.messages.push(message)
                }

            },
            prepare: (text, autor, chatId) => {
                const id = nanoid()
                return {
                    payload: {
                        message: { id, text, autor },
                        chatId,
                    }
                }
            }
        }
    }
})

// chats: [
//     {
//         id: '1',
//         name: 'room1',
//         messages: [
//             { text: "HEYYEYAAEYAAAEYAEYAA", autor: "HEMAN" },
//             { text: "Hey", autor: "HEMAN" },
//             { text: "What's goin on?", autor: "HEMAN" },]
//     },
//     {
//         id: '2',
//      name: 'room2',
//         messages: [
//             { text: "hello room2", autor: "HEMAN" },
//             { text: "hello room2", autor: "User" }
//         ]
//     }
// ]


export const selectChats = (state) => state.chat.chats
export const selectChatsIds = (state) => state.chat.chats.map((chat) => chat.id)
export const selectChatById = (chatId) => (state) => state.chat.chats.find(c => c.id === chatId ?? [])

export const { messageAdded } = chatSlice.actions
export default chatSlice.reducer