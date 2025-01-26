import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAddTask,
    fetchChangeTaskStatus,
    fetchDeleteTask,
    fetchEditTask,
    fetchGetTasks,
} from './fetchTasksData.ts';
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

            // Первый рендер
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

            // Добавление задачи
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

            // Изменение статуса задачи
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

            // Удаление задачи
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

            // Изменение задачи
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

export const getTasksReducer = getTasksSlice.reducer;