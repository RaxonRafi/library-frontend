import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'
import bookReducer from './features/books/bookSlice'

export const store = configureStore({
    reducer:{
        counter : counterReducer,
        books : bookReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;