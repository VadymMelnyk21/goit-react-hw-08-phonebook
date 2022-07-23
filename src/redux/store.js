import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authorizationReducer from './authorization/authorization-slice'
import { contactsSliceReducer } from './contacts/contacts-slice'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authorizationReducer),
        contacts: contactsSliceReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);