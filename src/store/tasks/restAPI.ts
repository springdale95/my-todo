import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { showAndHideNotification } from '../notifications/thunk';
import { NotificationState } from '../notifications/notificationsReducer';
import { ITask } from '../tasks/tasksReducer'
import { AppDispatch, RootState } from '../store';

const HTTPS = "https://";
const id = '678bc1461a6b89b27a2b563b.';
const baseURL = 'mockapi.io';
const path = '/api/v1/tasks/';
const url = HTTPS + id + baseURL + path;

export const fetchGetTasks = createAsyncThunk<ITask[], void, { state: RootState; dispatch: AppDispatch }>(
    'get/tasks',
    async (_, { dispatch }) => {
        try {
            const response = await axios.get(url);
            const showNotificationAction: NotificationState = { show: true, notificationText: 'Задачи загружены', type: 'success' };
            const hideNotificationAction: NotificationState = { show: false, notificationText: '', type: 'panding' };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchAddTask = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
    'post/task',
    async (newTask: ITask, { dispatch }) => {
        try {
            const response = await axios.post(url, newTask);
            const showNotificationAction: NotificationState = { show: true, notificationText: 'Задача добавлена', type: 'success' };
            const hideNotificationAction: NotificationState = { show: false, notificationText: '', type: 'panding' };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchChangeTaskStatus = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
    'put/taskStatus',
    async (updatedTask: ITask, { dispatch }) => {
        try {
            const response = await axios.put(url + updatedTask.id, updatedTask);
            const showNotificationAction: NotificationState = { show: true, notificationText: 'Статус задачи обновлен', type: 'success' };
            const hideNotificationAction: NotificationState = { show: false, notificationText: '', type: 'panding' };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchDeleteTask = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
    'delete/task',
    async (task: ITask, { dispatch }) => {
        try {
            const response = await axios.delete(url + task.id);
            const showNotificationAction: NotificationState = { show: true, notificationText: 'Задача удалена', type: 'success' };
            const hideNotificationAction: NotificationState = { show: false, notificationText: '', type: 'panding' };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

export const fetchEditTask = createAsyncThunk<ITask, ITask, { state: RootState; dispatch: AppDispatch }>(
    'put/taskText',
    async (task: ITask, { dispatch }) => {
        try {
            const response = await axios.put(url + task.id, task);
            const showNotificationAction: NotificationState = { show: true, notificationText: 'Задача редактирована', type: 'success' };
            const hideNotificationAction: NotificationState = { show: false, notificationText: '', type: 'panding' };
            dispatch(showAndHideNotification(showNotificationAction, hideNotificationAction));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);