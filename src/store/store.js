import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {stateReducer} from "./stateReducer";
import {filterReducer} from "./filterReducer";

const rootReducer = combineReducers({
    stateReducer,
    filterReducer
})

export const store = configureStore({
    reducer: rootReducer
})