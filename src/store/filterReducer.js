import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    searchValue: '',
    selectValue: "",
    selectedValueTime: "",
}


const slice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        searchValue(state, action) {
            state.searchValue = action.payload.searchValue
        },
        onSelected(state, action) {
            state.selectValue = action.payload.selectValue
        },
        onSelectedTime(state, action) {
            state.selectedValueTime = action.payload.selectedValueTime
        }
    }

})

export const filterReducer = slice.reducer
export const {searchValue, onSelected, onSelectedTime} = slice.actions