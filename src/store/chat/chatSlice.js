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
                    },
                    meta: {
                        delay: 500,
                    },
                }
            }
        },
        // 3. добавить логику удаления и добавления чатов в редьюсер.
        chatDeleted: (state, action) => {
            const chats = state.chats.filter(c =>
                c.title !== action.payload)
            return { ...state, chats: [...chats] }
        },
        chatAdded: {
            reducer: (state, action) => {
                console.log(action.payload)
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

export const selectChatsTitles = (state) => state.chat.chats.map((c) => c.title)

export const selectChatById = (chatId) => (state) => state.chat.chats.find(c => c.id === chatId)

export const selectChatMessagesById = createSelector(
    selectChats,
    (_, chatId) => chatId,
    (chats, chatId) => chats.find(c => c.id === chatId)?.messages ?? []
)

export const { messageAdded, chatDeleted, chatAdded } = chatSlice.actions
export default chatSlice.reducer