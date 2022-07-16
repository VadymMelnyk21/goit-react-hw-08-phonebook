import { configureStore } from '@reduxjs/toolkit';
// import { getDefaultNormalizer } from '@testing-library/react';
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
import { contactsApi } from './contactsApi'
// import { persisteContactReducer } from './contactsSlice';
import contactsSlice from './contactsSlice'

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: contactsSlice,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),

    // {
    //     return getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     });
    // },
})

// export const persistor = persistStore(store);
