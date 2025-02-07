import { createSlice } from '@reduxjs/toolkit';

type FilterState = {
    type: 'all' | 'active' | 'done';
};

const initialState: FilterState = {
    type: 'all',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        allFilterReducer: (state, action) => {
            return { ...state, ...action.payload };
        },
        activeFilterReducer: (state, action) => {
            return { ...state, ...action.payload };
        },
        doneFilterReducer: (state, action) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { allFilterReducer, activeFilterReducer, doneFilterReducer } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
