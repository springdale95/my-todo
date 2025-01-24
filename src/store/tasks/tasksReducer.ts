import { createSlice } from '@reduxjs/toolkit';
import { fetchAddTask, fetchGetTasks } from './fetchTasksData.ts';
import { ITask } from '../../types/types.ts';

interface TasksState {
    tasks: ITask[];
    loading: boolean;
    error: string | null;
}

const initialState: TasksState = {
    tasks: [],
    loading: false,
    error: null,
}

const getTasksSlice = createSlice({
    name: "getTasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGetTasks.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(fetchGetTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
    },
})

const addTaskSlice = createSlice({
    name: "addTasks",
    initialState, // ?????
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAddTask.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.tasks.push(action.payload);
            })
            .addCase(fetchAddTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
    },
})

export const getTasksReducer = getTasksSlice.reducer;
export const addTaskReducer = addTaskSlice.reducer;