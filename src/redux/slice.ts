import {CurrencyListTypes} from "../utils/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState:CurrencyListTypes[] = [];

export const converterSlice = createSlice({
    name:'converter',
    initialState,
    reducers:{
        getCurrencyList: (state:CurrencyListTypes[], action) => action.payload,
    },
})

export const {getCurrencyList} = converterSlice.actions;
export default converterSlice.reducer;

