import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const HTTPS = "https://";
const id = '678bc1461a6b89b27a2b563b.';
const baseURL = 'mockapi.io/';
const path = 'api/v1/tasks/'
const url = HTTPS + id + baseURL + path;

export const fetchGetTasks = createAsyncThunk('get/tasks', async () => {
    try {
        const response = await axios.get(url)
        console.log("Первый рендер", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchAddTask = createAsyncThunk('post/task', async (newTask) => {
    try {
        const response = await axios.post(url, newTask)
        console.log("Задача добавлена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchChangeTaskStatus = createAsyncThunk('put/taskStatus', async (task) => {
    try {
        const response = await axios.put(url + task.id, task)
        console.log("Задача обновлена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchDeleteTask = createAsyncThunk('delete/task', async (task) => {
    try {
        const response = await axios.delete(url + task.id)
        console.log("Задача удалена", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchEditTask = createAsyncThunk('put/taskText', async (task) => {
    try {
        const response = await axios.put(url + task.id, task)
        console.log("Задача редактирована", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})