import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './features/profile/profileSlice'
import themeReducer from './features/theme/themeSlice'
import messagesReducer from './features/messages/messagesSlice'

export const store = configureStore({
    reducer: {
        profile: profileReducer,
        messages: messagesReducer,
        theme: themeReducer,
    }
})