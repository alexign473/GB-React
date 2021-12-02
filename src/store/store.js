import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile/profileSlice'
import themeReducer from './theme/themeSlice'
import chatReducer from './chat/chatSlice'
import logger from 'redux-logger';
import { timeScheduler } from './middleware/timeScheduler '
import { botAnswer } from './middleware/botAnswer'
import { combineReducers } from 'redux';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    profile: profileReducer,
    chat: chatReducer,
    theme: themeReducer
});

// 4. Установить и настроить redux-persist.
// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['chat'], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 1. Установить и подключить к стору redux-thunk.

export const store = configureStore({
    reducer: persistedReducer,
    // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(
        logger,
        timeScheduler,
        botAnswer
    ),
})

export const persistor = persistStore(store)