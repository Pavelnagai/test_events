import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {stateReducer} from "./stateReducer";

const rootReducer = combineReducers({
    stateReducer,
})

export const store = configureStore({
    reducer: rootReducer
})