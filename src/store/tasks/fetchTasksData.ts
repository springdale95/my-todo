import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://678bc1461a6b89b27a2b563b.mockapi.io/api/v1/tasks/';

export const fetchGetTasks = createAsyncThunk('tasks/fetchGetTasks', async () => {
    try {
        const response = await axios.get(url)
        console.log("Первый рендер", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchAddTask = createAsyncThunk('task/fetchAddTask', async (newTask) => {
    try {
        const response = await axios.post(url, newTask)
        console.log("Задача добавлена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchChangeTaskStatus = createAsyncThunk('task/fetch/changeTaskStatus', async (updatedTask) => {
    try {
        const response = await axios.put(url + updatedTask.id, updatedTask)
        console.log("Задача обновлена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchDeleteTask = createAsyncThunk('task/fetchDeleteTask', async (task) => {
    try {
        const response = await axios.delete(url + task.id)
        console.log("Задача удалена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchEditTask = createAsyncThunk('task/fetchEditTask', async (task) => {
    try {
        const response = await axios.put(url + task.id, task)
        console.log("Задача редактирована", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})