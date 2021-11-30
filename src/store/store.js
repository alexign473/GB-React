import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile/profileSlice'
import themeReducer from './theme/themeSlice'
import chatReducer from './chat/chatSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
        theme: themeReducer,
    }
})