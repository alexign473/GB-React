import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile/profileSlice'
import themeReducer from './theme/themeSlice'
import chatReducer from './chat/chatSlice'
import logger from 'redux-logger';
import { timeScheduler } from './middleware/timeScheduler '
import { botAnswer } from './middleware/botAnswer'

// 1. Установить и подключить к стору redux-thunk.
// подключен по умолчанию
export const store = configureStore({
    reducer: {
        profile: profileReducer,
        chat: chatReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        logger,
        timeScheduler,
        botAnswer
    ),
})