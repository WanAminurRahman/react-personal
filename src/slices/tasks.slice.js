import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import TasksDataService from "../services/api/tasks.service";

const initialState = [];

export const createTask = createAsyncThunk(
    "tasks/create",
    async (data) => {
        const res = await TasksDataService.createTask(data);
        return res;
    }
);

export const retrieveTasks = createAsyncThunk(
    "tasks/retrieve",
    async () => {
        const res = await TasksDataService.fetchTasks();

        return res;
    }
);
export const retrieveTask = createAsyncThunk(
    "tasks/retrieveSingle",
    async (id) => {
        const res = await TasksDataService.fetchTask(id);
        return res;
    }
);

export const updateTask = createAsyncThunk(
    "tasks/update",
    async (data) => {
        const res = await TasksDataService.updateTask(data);
        console.log('ree', data)
        return res;
    }
);

export const deleteTask = createAsyncThunk(
    "tasks/delete",
    async (id) => {
        await TasksDataService.deleteTask(id);
        return { id };
    }
);

export const deleteAllTasks = createAsyncThunk(
    "tasks/deleteAll",
    async () => {
        const res = await TasksDataService.deleteAllTasks();
        return res.data;
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(retrieveTasks.fulfilled, (state, action) => {
            return [...action.payload];
        })
        builder.addCase(createTask.fulfilled, (state, action) => {
            state = action.payload
        })
        builder.addCase(updateTask.fulfilled, (state, action) => {
            
            const index = state.findIndex(user => user.id === action.payload.id);
            state[index] = {
                ...state[index],
                ...action.payload,
            };
            console.log('State', state.findIndex(user => user.id === action.payload.id))
            console.log('payload', action.payload)
        })

        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state = state.filter((item) => item._id != action.payload)
        })
    },
});

const { reducer } = taskSlice;
export default reducer;