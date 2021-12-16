import { createSlice, createSelector, nanoid } from "@reduxjs/toolkit";
import initialChatData from "./initialStateData.json";

const initialState = {
    chats: initialChatData.chats,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        messageAdded: {
            reducer: (state, action) => {
                const { message, chatId } = action.payload
                const chat = state.chats.find((chat) => chat.id === chatId)
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
                    },
                    meta: {
                        delay: 500,
                    },
                }
            }
        },
        chatDeleted: (state, action) => {
            const chats = state.chats.filter(chat =>
                chat.title !== action.payload)
            return { ...state, chats: [...chats] }
        },
        chatAdded: {
            reducer: (state, action) => {
                state.chats.push(action.payload)
            },
            prepare: (title) => {
                return {
                    payload: {
                        id: title,
                        title: title,
                        messages: []
                    }
                }
            }
        }
    }
})

export const selectChats = (state) => state.chat.chats
export const selectChatsTitles = (state) => state.chat.chats.map((chat) => chat.title)
export const selectChatById = (chatId) => (state) => state.chat.chats.find(chat => chat.id === chatId)

export const selectChatMessagesById = createSelector(
    selectChats,
    (_, chatId) => chatId,
    (chats, chatId) => chats.find(chat => chat.id === chatId)?.messages ?? []
)

export const { messageAdded, chatDeleted, chatAdded } = chatSlice.actions
export default chatSlice.reducer