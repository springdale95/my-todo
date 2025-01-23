import { createSlice } from '@reduxjs/toolkit';
import { fetchTasksData } from './fetchTasksData.ts';

export interface ITask {
    id: string;
    text: string;
    status: boolean;
}

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

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasksData.fulfilled, (state, action) => {
                state.tasks = action.payload;
            })
            .addCase(fetchTasksData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
    },
})

export const tasksReducer = tasksSlice.reducer;