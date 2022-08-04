import { configureStore } from "@reduxjs/toolkit";
import {api} from "./api";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        [api.reducerPath] : api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>