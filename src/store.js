import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './features/profile/profileSlice'
import themeReducer from './features/theme/themeSlice'
import chatReducer from './features/chat/chatSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
        theme: themeReducer,
    }
})