import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {AppReducer} from "./app/appReducer";


const rootReducer = combineReducers({
    app: AppReducer
})

export const store = configureStore({
    reducer: rootReducer,
})

export type AppRootState = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store