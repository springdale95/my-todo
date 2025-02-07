import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAddTask,
    fetchChangeTaskStatus,
    fetchDeleteTask,
    fetchEditTask,
    fetchGetTasks,
} from './thunks.ts';

export type ITask = {
    id: string;
    text: string;
    status: boolean;
}

type TasksState = {
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
    reducers: {
        resetTasks: (state) => {
            return { ...state, ...initialState };
        }
    },
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
            .addCase(fetchChangeTaskStatus.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchChangeTaskStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(fetchChangeTaskStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
            .addCase(fetchDeleteTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDeleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.filter((item) => item.id !== action.payload.id)
            })
            .addCase(fetchDeleteTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })

            .addCase(fetchEditTask.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEditTask.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                );
            })
            .addCase(fetchEditTask.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch tasks.';
            })
    },
})

export const { resetTasks } = tasksSlice.actions;
export const getTasksReducer = tasksSlice.reducer;

