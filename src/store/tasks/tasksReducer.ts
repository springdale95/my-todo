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
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchGetTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
            .addCase(fetchAddTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAddTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = [...state.tasks, action.payload];
            })
            .addCase(fetchAddTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
    },
})

export const getTasksReducer = getTasksSlice.reducer;