import axios from 'axios';

const fetchTasks = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/api/tasks`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw for potential error handling in components
    }
};

const fetchTask = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/tasks/${id}`);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw for potential error handling in components
    }
};

const createTask = async (data) => {
    try {
        const response = await axios.post(`http://localhost:8000/api/tasks`, data);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error;
    }

}
const updateTask = async (data) => {
    try {
        const response = await axios.put(`http://localhost:8000/api/tasks/${data.id}`, data);

        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error;
    }
}

const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/tasks/${id}`);
      
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error;
    }
}

const deleteAllTask = async () => {
    try {
        const response = await axios.delete(`http://localhost:8000/api/tasks`);
        alert(JSON.stringify(response.data))
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
}

const UsersDataService = {
    fetchTasks,
    fetchTask,
    createTask,
    updateTask,
    deleteTask,
    deleteAllTask
}

export default UsersDataService;