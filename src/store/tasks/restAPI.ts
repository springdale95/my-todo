import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showAndHideNotification } from '../notifications/thunk';

const HTTPS = "https://";
const id = '678bc1461a6b89b27a2b563b.';
const baseURL = 'mockapi.io';
const path = '/api/v1/tasks/'
const url = HTTPS + id + baseURL + path;

export const fetchGetTasks = createAsyncThunk('get/tasks', async (_, { dispatch }) => {
    try {
        const response = await axios.get(url)
        const showNotificationAction = { show: true, notificationText: 'Задачи загружены', type: 'success'};
        const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
        dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchAddTask = createAsyncThunk('post/task', async (newTask, { dispatch }) => {
    try {
        const response = await axios.post(url, newTask)
        const showNotificationAction = { show: true, notificationText: 'Задача добавлена', type: 'success'};
        const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
        dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchChangeTaskStatus = createAsyncThunk('put/taskStatus', async (task, { dispatch }) => {
    try {
        const response = await axios.put(url + task.id, task)
        const showNotificationAction = { show: true, notificationText: 'Статус задачи обновлен', type: 'success'};
        const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
        dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchDeleteTask = createAsyncThunk('delete/task', async (task, { dispatch }) => {
    try {
        const response = await axios.delete(url + task.id)
        const showNotificationAction = { show: true, notificationText: 'Задача удалена', type: 'success'};
        const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
        dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})

export const fetchEditTask = createAsyncThunk('put/taskText', async (task, { dispatch }) => {
    try {
        const response = await axios.put(url + task.id, task)
        const showNotificationAction = { show: true, notificationText: 'Задача редактирована', type: 'success'};
        const hideNotificationAction = { show: false, notificationText: '', type: 'panding'};
        dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction))
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})