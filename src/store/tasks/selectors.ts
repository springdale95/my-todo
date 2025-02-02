import { RootState } from '../store.ts';

export const selectGetTasks = (state: RootState) => state.tasksResponse.tasks;
export const selectLoading = (state: RootState) => state.tasksResponse.loading;
