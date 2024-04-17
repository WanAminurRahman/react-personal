import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../slices/tasks.slice';

const reducer = {
  tasks: tasksReducer,
}

const store = configureStore({
  reducer: reducer,
});

export default store;