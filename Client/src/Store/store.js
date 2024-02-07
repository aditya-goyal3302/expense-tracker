import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';


const persistConfig = {
    key: 'root',
    storage,
    version:1
}

const persistedUserReducer = persistReducer(persistConfig, userSlice);

export const store = configureStore({
    reducer: {
        user: persistedUserReducer
    }
});

export  const persistor = persistStore(store);
