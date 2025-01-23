import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://678bc1461a6b89b27a2b563b.mockapi.io/api/v1/tasks/';

export const fetchTasksData = createAsyncThunk('tasks/fetchTasksData', async () => {
    try {
        const response = await axios.get(url)
        console.log("Первый рендер", response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
})